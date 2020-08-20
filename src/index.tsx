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
import countries, { ICountry } from './source';

const InputGroup = Input.Group;

interface PropTypes {
    onChange?: Function;
    value?: CountryPhoneCodeValue;
    inputProps?: any;
    lang: string;
}

interface CountryPhoneCodeValue {
    code?: number;
    phone?: string;
    short?: string;
}

function CountryPhoneCode({ onChange, value, inputProps, lang = "zh" }: PropTypes, ref: any) {
    const defaultCountry: ICountry | undefined = useMemo(() => {
        return countries.find(c => c.short === 'CN');
    }, []);

    const [country, setCountry] = useState<ICountry | undefined>(defaultCountry);
    const [phone, setPhone] = useState<string | undefined>();
    const phoneRef = useRef(null);

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
        <InputGroup compact>
            <Select
                bordered={false}
                value={country && country.short}
                style={{ width: "100px" }}
                dropdownMatchSelectWidth={false}
                optionLabelProp="label"
                onChange={handleCountryChange}
            >
                {countries.map(item => {
                    const fix = {
                        key: item.short,
                        value: item.short,
                        label: `${item.emoji}+${item.phoneCode}`
                    };
                    console.log('lang :>> ', lang);
                    console.log('item.short :>> ', item.short);
                    console.log('i18nCountries.getName(item.short, lang) :>> ', i18nCountries.getName(item.short, lang));
                    return (
                        <Select.Option {...fix}>
                            {item.emoji} {i18nCountries.getName(item.short, lang)} {item.phoneCode}
                        </Select.Option>
                    );
                })}
            </Select>
            <Input
                bordered={false}
                style={{ width: "calc(100% - 100px)" }}
                ref={phoneRef}
                onChange={handlePhoneChange}
                value={value && value.phone}
                {...inputProps}
            />
        </InputGroup>
    );
}

export default forwardRef(CountryPhoneCode);
