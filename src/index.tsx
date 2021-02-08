import React, {
    useCallback,
    useState,
    useMemo,
    useRef,
    useEffect,
    forwardRef
} from 'react';
import { Input, Select } from 'antd';
import i18nCountries from 'i18n-iso-countries';
import countries, * as langs from './source';
import { ICountry } from './source';

const InputGroup = Input.Group;

interface PropTypes {
    onChange?: Function;
    value?: CountryPhoneCodeValue;
    inputProps?: any;
    selectProps?: any;
    containerProps?: any;
    lang: string;
    makeShortName?: Function;
}

interface CountryPhoneCodeValue {
    code?: number;
    phone?: string;
    short?: string;
}

const _getKeyValue_ = (key: string) => (obj: Record<string, any>) => obj[key];

function CountryPhoneCode({ onChange, value, inputProps, selectProps, containerProps, lang = "zh", makeShortName }: PropTypes, ref: any) {
    const defaultCountry: ICountry | undefined = useMemo(() => {
        return countries.find(c => c.short === 'CN');
    }, []);

    const [country, setCountry] = useState<ICountry | undefined>(defaultCountry);
    const [phone, setPhone] = useState<string | undefined>();
    const phoneRef = useRef(null);

    useEffect(()=> {
        if(lang !== 'default')
            i18nCountries.registerLocale(_getKeyValue_(lang)(langs))
    }, [lang])

    useEffect(() => {
        if (value !== undefined) {
            if (value.short) {
                setCountry(countries.find(c => c.short === value.short));
            } else {
                setCountry(countries.find(c => Number(c.phoneCode) === value.code));
            }
            setPhone(value.phone);
        }
    }, [value]);

    const triggerChange = useCallback(
        (phone?: string, country?: ICountry) => {
            const result: CountryPhoneCodeValue = {
                phone,
                code: country && Number(country.phoneCode),
                short: country && country.short,
            };
            if (onChange) {
                onChange(result);
            }
        },
        [onChange]
    );

    const handleCountryChange = useCallback(
        (value: string) => {
            const c = countries.find(c => c.short === value);
            if (!c) {
                throw new Error(`Country not found: ${value}`);
            }
            setCountry(c);
            triggerChange(phone, c);
        },
        [setCountry, triggerChange, phone]
    );

    const handlePhoneChange = useCallback(() => {
        // @ts-ignore: Object is possibly 'null'.
        const value = phoneRef.current.input.value;
        setPhone(value);
        triggerChange(value, country);
    }, [setPhone, country, triggerChange]);

    return (
        <InputGroup compact {...containerProps}>
            <Select
                value={country && country.short}
                dropdownMatchSelectWidth={false}
                optionLabelProp="label"
                onChange={handleCountryChange}
                {...selectProps}
            >
                {countries.map(item => {
                    const fix = {
                        key: item.short,
                        value: item.short,
                        label: `${item.emoji} +${item.phoneCode}`
                    };
                    const countryName = i18nCountries.getName(item.short, lang);
                    return (
                        <Select.Option {...fix}>
                            {item.emoji} {typeof makeShortName === "function" ? makeShortName(countryName): countryName} {item.phoneCode}
                        </Select.Option>
                    );
                })}
            </Select>
            <Input
                ref={phoneRef}
                onChange={handlePhoneChange}
                value={value && value.phone}
                {...inputProps}
            />
        </InputGroup>
    );
}

export default forwardRef(CountryPhoneCode);
