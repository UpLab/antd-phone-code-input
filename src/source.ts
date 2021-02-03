import ar from 'i18n-iso-countries/langs/ar.json';
import az from 'i18n-iso-countries/langs/az.json';
import be from 'i18n-iso-countries/langs/be.json';
import bg from 'i18n-iso-countries/langs/bg.json';
import bn from 'i18n-iso-countries/langs/bn.json';
import bs from 'i18n-iso-countries/langs/bs.json';
import ca from 'i18n-iso-countries/langs/ca.json';
import cs from 'i18n-iso-countries/langs/cs.json';
import da from 'i18n-iso-countries/langs/da.json';
import de from 'i18n-iso-countries/langs/de.json';
import el from 'i18n-iso-countries/langs/el.json';
import en from 'i18n-iso-countries/langs/en.json';
import es from 'i18n-iso-countries/langs/es.json';
import et from 'i18n-iso-countries/langs/et.json';
import fa from 'i18n-iso-countries/langs/fa.json';
import fi from 'i18n-iso-countries/langs/fi.json';
import fr from 'i18n-iso-countries/langs/fr.json';
import gl from 'i18n-iso-countries/langs/gl.json';
import he from 'i18n-iso-countries/langs/he.json';
import hi from 'i18n-iso-countries/langs/hi.json';
import hr from 'i18n-iso-countries/langs/hr.json';
import hu from 'i18n-iso-countries/langs/hu.json';
import hy from 'i18n-iso-countries/langs/hy.json';
import id from 'i18n-iso-countries/langs/id.json';
import it from 'i18n-iso-countries/langs/it.json';
import ja from 'i18n-iso-countries/langs/ja.json';
import ka from 'i18n-iso-countries/langs/ka.json';
import kk from 'i18n-iso-countries/langs/kk.json';
import ko from 'i18n-iso-countries/langs/ko.json';
import ky from 'i18n-iso-countries/langs/ky.json';
import lt from 'i18n-iso-countries/langs/lt.json';
import lv from 'i18n-iso-countries/langs/lv.json';
import mk from 'i18n-iso-countries/langs/mk.json';
import mn from 'i18n-iso-countries/langs/mn.json';
import ms from 'i18n-iso-countries/langs/ms.json';
import nb from 'i18n-iso-countries/langs/nb.json';
import nl from 'i18n-iso-countries/langs/nl.json';
import nn from 'i18n-iso-countries/langs/nn.json';
import pl from 'i18n-iso-countries/langs/pl.json';
import pt from 'i18n-iso-countries/langs/pt.json';
import ro from 'i18n-iso-countries/langs/ro.json';
import ru from 'i18n-iso-countries/langs/ru.json';
import sk from 'i18n-iso-countries/langs/sk.json';
import sl from 'i18n-iso-countries/langs/sl.json';
import sr from 'i18n-iso-countries/langs/sr.json';
import sv from 'i18n-iso-countries/langs/sv.json';
import th from 'i18n-iso-countries/langs/th.json';
import tr from 'i18n-iso-countries/langs/tr.json';
import uk from 'i18n-iso-countries/langs/uk.json';
import ur from 'i18n-iso-countries/langs/ur.json';
import uz from 'i18n-iso-countries/langs/uz.json';
import vi from 'i18n-iso-countries/langs/vi.json';
import zh from 'i18n-iso-countries/langs/zh.json';

export {
    ar, az, be, bg, bn, bs, ca, cs, da,
    de, el, en, es, et, fa, fi, fr, gl,
    he, hi, hr, hu, hy, id, it, ja, ka,
    kk, ko, ky, lt, lv, mk, mn, ms, nb,
    nl, nn, pl, pt, ro, ru, sk, sl, sr,
    sv, th, tr, uk, ur, uz, vi, zh
}

export interface ICountry {
    short: string;
    emoji: string;
    phoneCode: string;
}

const countries: ICountry[] = [
    {
        "short": "CA",
        "emoji": "🇨🇦",
        "phoneCode": "1"
    },
    {
        "short": "US",
        "emoji": "🇺🇸",
        "phoneCode": "1"
    },
    {
        "short": "BS",
        "emoji": "🇧🇸",
        "phoneCode": "1242"
    },
    {
        "short": "BB",
        "emoji": "🇧🇧",
        "phoneCode": "1246"
    },
    {
        "short": "AI",
        "emoji": "🇦🇮",
        "phoneCode": "1264"
    },
    {
        "short": "AG",
        "emoji": "🇦🇬",
        "phoneCode": "1268"
    },
    {
        "short": "VI",
        "phoneCode": "1284",
        "emoji": "🇻🇮"
    },
    {
        "short": "VG",
        "emoji": "🇻🇬",
        "phoneCode": "1340"
    },
    {
        "short": "KY",
        "emoji": "🇰🇾",
        "phoneCode": "1345"
    },
    {
        "short": "BM",
        "emoji": "🇧🇲",
        "phoneCode": "1441"
    },
    {
        "short": "GD",
        "emoji": "🇬🇩",
        "phoneCode": "1473"
    },
    {
        "short": "TC",
        "emoji": "🇹🇨",
        "phoneCode": "1649"
    },
    {
        "short": "MS",
        "emoji": "🇲🇸",
        "phoneCode": "1664"
    },
    {
        "short": "GU",
        "emoji": "🇬🇺",
        "phoneCode": "1671"
    },
    {
        "short": "AS",
        "emoji": "🇦🇸",
        "phoneCode": "1684"
    },
    {
        "short": "SX",
        "emoji": "🇳🇱",
        "phoneCode": "1721"
    },
    {
        "short": "LC",
        "emoji": "🇱🇨",
        "phoneCode": "1758"
    },
    {
        "short": "DM",
        "emoji": "🇩🇲",
        "phoneCode": "1767"
    },
    {
        "short": "VC",
        "emoji": "🇻🇨",
        "phoneCode": "1784"
    },
    {
        "short": "PR",
        "emoji": "🇵🇷",
        "phoneCode": "1787"
    },
    {
        "short": "DO",
        "emoji": "🇩🇴",
        "phoneCode": "1809"
    },
    {
        "short": "TT",
        "emoji": "🇹🇹",
        "phoneCode": "1868"
    },
    {
        "short": "KN",
        "emoji": "🇰🇳",
        "phoneCode": "1869"
    },
    {
        "short": "JM",
        "emoji": "🇯🇲",
        "phoneCode": "1876"
    },
    {
        "short": "EG",
        "emoji": "🇪🇬",
        "phoneCode": "20"
    },
    {
        "short": "MA",
        "emoji": "🇲🇦",
        "phoneCode": "212"
    },
    {
        "short": "DZ",
        "emoji": "🇩🇿",
        "phoneCode": "213"
    },
    {
        "short": "TN",
        "emoji": "🇹🇳",
        "phoneCode": "216"
    },
    {
        "short": "LY",
        "emoji": "🇱🇾",
        "phoneCode": "218"
    },
    {
        "short": "GM",
        "emoji": "🇬🇲",
        "phoneCode": "220"
    },
    {
        "short": "SN",
        "emoji": "🇸🇳",
        "phoneCode": "221"
    },
    {
        "short": "MR",
        "emoji": "🇲🇷",
        "phoneCode": "222"
    },
    {
        "short": "ML",
        "emoji": "🇲🇱",
        "phoneCode": "223"
    },
    {
        "short": "GN",
        "emoji": "🇬🇳",
        "phoneCode": "224"
    },
    {
        "short": "CI",
        "phoneCode": "225",
        "emoji": "🇨🇮"
    },
    {
        "short": "BF",
        "emoji": "🇧🇫",
        "phoneCode": "226"
    },
    {
        "short": "NE",
        "emoji": "🇳🇪",
        "phoneCode": "227"
    },
    {
        "short": "TG",
        "emoji": "🇹🇬",
        "phoneCode": "228"
    },
    {
        "short": "BJ",
        "emoji": "🇧🇯",
        "phoneCode": "229"
    },
    {
        "short": "MU",
        "emoji": "🇲🇺",
        "phoneCode": "230"
    },
    {
        "short": "LR",
        "emoji": "🇱🇷",
        "phoneCode": "231"
    },
    {
        "short": "SL",
        "emoji": "🇸🇱",
        "phoneCode": "232"
    },
    {
        "short": "GH",
        "emoji": "🇬🇭",
        "phoneCode": "233"
    },
    {
        "short": "NG",
        "emoji": "🇳🇬",
        "phoneCode": "234"
    },
    {
        "short": "TD",
        "emoji": "🇹🇩",
        "phoneCode": "235"
    },
    {
        "short": "CF",
        "emoji": "🇨🇫",
        "phoneCode": "236"
    },
    {
        "short": "CM",
        "emoji": "🇨🇲",
        "phoneCode": "237"
    },
    {
        "short": "CV",
        "emoji": "🇨🇻",
        "phoneCode": "238"
    },
    {
        "short": "ST",
        "emoji": "🇸🇹",
        "phoneCode": "239"
    },
    {
        "short": "GQ",
        "emoji": "🇬🇶",
        "phoneCode": "240"
    },
    {
        "short": "GA",
        "emoji": "🇬🇦",
        "phoneCode": "241"
    },
    {
        "short": "CG",
        "phoneCode": "242",
        "emoji": "🇨🇬"
    },
    {
        "short": "CD",
        "phoneCode": "243",
        "emoji": "🇨🇩"
    },
    {
        "short": "AO",
        "emoji": "🇦🇴",
        "phoneCode": "244"
    },
    {
        "short": "GW",
        "emoji": "🇬🇼",
        "phoneCode": "245"
    },
    {
        "short": "SC",
        "emoji": "🇸🇨",
        "phoneCode": "248"
    },
    {
        "short": "SD",
        "emoji": "🇸🇩",
        "phoneCode": "249"
    },
    {
        "short": "RW",
        "emoji": "🇷🇼",
        "phoneCode": "250"
    },
    {
        "short": "ET",
        "emoji": "🇪🇹",
        "phoneCode": "251"
    },
    {
        "short": "SO",
        "emoji": "🇸🇴",
        "phoneCode": "252"
    },
    {
        "short": "DJ",
        "emoji": "🇩🇯",
        "phoneCode": "253"
    },
    {
        "short": "KE",
        "emoji": "🇰🇪",
        "phoneCode": "254"
    },
    {
        "short": "TZ",
        "emoji": "🇹🇿",
        "phoneCode": "255"
    },
    {
        "short": "UG",
        "emoji": "🇺🇬",
        "phoneCode": "256"
    },
    {
        "short": "BI",
        "emoji": "🇧🇮",
        "phoneCode": "257"
    },
    {
        "short": "MZ",
        "emoji": "🇲🇿",
        "phoneCode": "258"
    },
    {
        "short": "ZM",
        "emoji": "🇿🇲",
        "phoneCode": "260"
    },
    {
        "short": "MG",
        "emoji": "🇲🇬",
        "phoneCode": "261"
    },
    {
        "short": "RE",
        "phoneCode": "262",
        "emoji": "🇷🇪"
    },
    {
        "short": "ZW",
        "emoji": "🇿🇼",
        "phoneCode": "263"
    },
    {
        "short": "NA",
        "emoji": "🇳🇦",
        "phoneCode": "264"
    },
    {
        "short": "MW",
        "emoji": "🇲🇼",
        "phoneCode": "265"
    },
    {
        "short": "LS",
        "emoji": "🇱🇸",
        "phoneCode": "266"
    },
    {
        "short": "BW",
        "emoji": "🇧🇼",
        "phoneCode": "267"
    },
    {
        "short": "SZ",
        "emoji": "🇸🇿",
        "phoneCode": "268"
    },
    {
        "short": "KM",
        "emoji": "🇰🇲",
        "phoneCode": "269"
    },
    {
        "short": "YT",
        "emoji": "🇾🇹",
        "phoneCode": "269"
    },
    {
        "short": "ZA",
        "emoji": "🇿🇦",
        "phoneCode": "27"
    },
    {
        "short": "ER",
        "emoji": "🇪🇷",
        "phoneCode": "291"
    },
    {
        "short": "AW",
        "emoji": "🇦🇼",
        "phoneCode": "297"
    },
    {
        "short": "FO",
        "emoji": "🇫🇴",
        "phoneCode": "298"
    },
    {
        "short": "GL",
        "emoji": "🇬🇱",
        "phoneCode": "299"
    },
    {
        "short": "GR",
        "emoji": "🇬🇷",
        "phoneCode": "30"
    },
    {
        "short": "NL",
        "emoji": "🇳🇱",
        "phoneCode": "31"
    },
    {
        "short": "BE",
        "emoji": "🇧🇪",
        "phoneCode": "32"
    },
    {
        "short": "FR",
        "emoji": "🇫🇷",
        "phoneCode": "33"
    },
    {
        "short": "ES",
        "emoji": "🇪🇸",
        "phoneCode": "34"
    },
    {
        "short": "GI",
        "emoji": "🇬🇮",
        "phoneCode": "350"
    },
    {
        "short": "PT",
        "emoji": "🇵🇹",
        "phoneCode": "351"
    },
    {
        "short": "LU",
        "emoji": "🇱🇺",
        "phoneCode": "352"
    },
    {
        "short": "IE",
        "emoji": "🇮🇪",
        "phoneCode": "353"
    },
    {
        "short": "IS",
        "emoji": "🇮🇸",
        "phoneCode": "354"
    },
    {
        "short": "AL",
        "emoji": "🇦🇱",
        "phoneCode": "355"
    },
    {
        "short": "MT",
        "emoji": "🇲🇹",
        "phoneCode": "356"
    },
    {
        "short": "CY",
        "emoji": "🇨🇾",
        "phoneCode": "357"
    },
    {
        "short": "FI",
        "emoji": "🇫🇮",
        "phoneCode": "358"
    },
    {
        "short": "BG",
        "emoji": "🇧🇬",
        "phoneCode": "359"
    },
    {
        "short": "HU",
        "emoji": "🇭🇺",
        "phoneCode": "36"
    },
    {
        "short": "LT",
        "emoji": "🇱🇹",
        "phoneCode": "370"
    },
    {
        "short": "LV",
        "emoji": "🇱🇻",
        "phoneCode": "371"
    },
    {
        "short": "EE",
        "emoji": "🇪🇪",
        "phoneCode": "372"
    },
    {
        "short": "MD",
        "emoji": "🇲🇩",
        "phoneCode": "373"
    },
    {
        "short": "AM",
        "emoji": "🇦🇲",
        "phoneCode": "374"
    },
    {
        "short": "BY",
        "emoji": "🇧🇾",
        "phoneCode": "375"
    },
    {
        "short": "AD",
        "emoji": "🇦🇩",
        "phoneCode": "376"
    },
    {
        "short": "MC",
        "emoji": "🇲🇨",
        "phoneCode": "377"
    },
    {
        "short": "SM",
        "emoji": "🇸🇲",
        "phoneCode": "378"
    },
    {
        "short": "UA",
        "emoji": "🇺🇦",
        "phoneCode": "380"
    },
    {
        "short": "RS",
        "emoji": "🇷🇸",
        "phoneCode": "381"
    },
    {
        "short": "ME",
        "emoji": "🇲🇪",
        "phoneCode": "382"
    },
    {
        "short": "HR",
        "emoji": "🇭🇷",
        "phoneCode": "385"
    },
    {
        "short": "SI",
        "emoji": "🇸🇮",
        "phoneCode": "386"
    },
    {
        "short": "BA",
        "emoji": "🇧🇦",
        "phoneCode": "387"
    },
    {
        "short": "MK",
        "emoji": "🇲🇰",
        "phoneCode": "389"
    },
    {
        "short": "IT",
        "emoji": "🇮🇹",
        "phoneCode": "39"
    },
    {
        "short": "RO",
        "emoji": "🇷🇴",
        "phoneCode": "40"
    },
    {
        "short": "CH",
        "emoji": "🇨🇭",
        "phoneCode": "41"
    },
    {
        "short": "CZ",
        "emoji": "🇨🇿",
        "phoneCode": "420"
    },
    {
        "short": "SK",
        "emoji": "🇸🇰",
        "phoneCode": "421"
    },
    {
        "short": "LI",
        "emoji": "🇱🇮",
        "phoneCode": "423"
    },
    {
        "short": "AT",
        "emoji": "🇦🇹",
        "phoneCode": "43"
    },
    {
        "short": "GB",
        "emoji": "🇬🇧",
        "phoneCode": "44"
    },
    {
        "short": "DK",
        "emoji": "🇩🇰",
        "phoneCode": "45"
    },
    {
        "short": "SE",
        "emoji": "🇸🇪",
        "phoneCode": "46"
    },
    {
        "short": "NO",
        "emoji": "🇳🇴",
        "phoneCode": "47"
    },
    {
        "short": "PL",
        "emoji": "🇵🇱",
        "phoneCode": "48"
    },
    {
        "short": "DE",
        "emoji": "🇩🇪",
        "phoneCode": "49"
    },
    {
        "short": "BZ",
        "emoji": "🇧🇿",
        "phoneCode": "501"
    },
    {
        "short": "GT",
        "emoji": "🇬🇹",
        "phoneCode": "502"
    },
    {
        "short": "SV",
        "emoji": "🇸🇻",
        "phoneCode": "503"
    },
    {
        "short": "HN",
        "emoji": "🇭🇳",
        "phoneCode": "504"
    },
    {
        "short": "NI",
        "emoji": "🇳🇮",
        "phoneCode": "505"
    },
    {
        "short": "CR",
        "emoji": "🇨🇷",
        "phoneCode": "506"
    },
    {
        "short": "PA",
        "emoji": "🇵🇦",
        "phoneCode": "507"
    },
    {
        "short": "PM",
        "emoji": "🇵🇲",
        "phoneCode": "508"
    },
    {
        "short": "HT",
        "emoji": "🇭🇹",
        "phoneCode": "509"
    },
    {
        "short": "PE",
        "emoji": "🇵🇪",
        "phoneCode": "51"
    },
    {
        "short": "MX",
        "emoji": "🇲🇽",
        "phoneCode": "52"
    },
    {
        "short": "CU",
        "emoji": "🇨🇺",
        "phoneCode": "53"
    },
    {
        "short": "AR",
        "emoji": "🇦🇷",
        "phoneCode": "54"
    },
    {
        "short": "BR",
        "emoji": "🇧🇷",
        "phoneCode": "55"
    },
    {
        "short": "CL",
        "emoji": "🇨🇱",
        "phoneCode": "56"
    },
    {
        "short": "CO",
        "emoji": "🇨🇴",
        "phoneCode": "57"
    },
    {
        "short": "VE",
        "emoji": "🇻🇪",
        "phoneCode": "58"
    },
    {
        "short": "GP",
        "emoji": "🇬🇵",
        "phoneCode": "590"
    },
    {
        "short": "BO",
        "emoji": "🇧🇴",
        "phoneCode": "591"
    },
    {
        "short": "GY",
        "emoji": "🇬🇾",
        "phoneCode": "592"
    },
    {
        "short": "EC",
        "emoji": "🇪🇨",
        "phoneCode": "593"
    },
    {
        "short": "GF",
        "emoji": "🇬🇫",
        "phoneCode": "594"
    },
    {
        "short": "PY",
        "emoji": "🇵🇾",
        "phoneCode": "595"
    },
    {
        "short": "MQ",
        "emoji": "🇲🇶",
        "phoneCode": "596"
    },
    {
        "short": "SR",
        "emoji": "🇸🇷",
        "phoneCode": "597"
    },
    {
        "short": "UY",
        "emoji": "🇺🇾",
        "phoneCode": "598"
    },
    {
        "short": "CW",
        "phoneCode": "599",
        "emoji": "🇨🇼"
    },
    {
        "short": "MY",
        "emoji": "🇲🇾",
        "phoneCode": "60"
    },
    {
        "short": "AU",
        "emoji": "🇦🇺",
        "phoneCode": "61"
    },
    {
        "short": "ID",
        "emoji": "🇮🇩",
        "phoneCode": "62"
    },
    {
        "short": "PH",
        "emoji": "🇵🇭",
        "phoneCode": "63"
    },
    {
        "short": "NZ",
        "emoji": "🇳🇿",
        "phoneCode": "64"
    },
    {
        "short": "SG",
        "emoji": "🇸🇬",
        "phoneCode": "65"
    },
    {
        "short": "TH",
        "emoji": "🇹🇭",
        "phoneCode": "66"
    },
    {
        "short": "TL",
        "emoji": "🇹🇱",
        "phoneCode": "670"
    },
    {
        "short": "BN",
        "emoji": "🇧🇳",
        "phoneCode": "673"
    },
    {
        "short": "PG",
        "emoji": "🇵🇬",
        "phoneCode": "675"
    },
    {
        "short": "TO",
        "emoji": "🇹🇴",
        "phoneCode": "676"
    },
    {
        "short": "SB",
        "emoji": "🇸🇧",
        "phoneCode": "677"
    },
    {
        "short": "VU",
        "emoji": "🇻🇺",
        "phoneCode": "678"
    },
    {
        "short": "FJ",
        "emoji": "🇫🇯",
        "phoneCode": "679"
    },
    {
        "short": "PW",
        "emoji": "🇵🇼",
        "phoneCode": "680"
    },
    {
        "short": "CK",
        "emoji": "🇨🇰",
        "phoneCode": "682"
    },
    {
        "short": "WS",
        "emoji": "🇼🇸",
        "phoneCode": "685"
    },
    {
        "short": "KI",
        "emoji": "🇰🇮",
        "phoneCode": "686"
    },
    {
        "short": "NC",
        "emoji": "🇳🇨",
        "phoneCode": "687"
    },
    {
        "short": "PF",
        "emoji": "🇵🇫",
        "phoneCode": "689"
    },
    {
        "short": "KZ",
        "emoji": "🇰🇿",
        "phoneCode": "7"
    },
    {
        "short": "RU",
        "emoji": "🇷🇺",
        "phoneCode": "7"
    },
    {
        "short": "JP",
        "emoji": "🇯🇵",
        "phoneCode": "81"
    },
    {
        "short": "KR",
        "emoji": "🇰🇷",
        "phoneCode": "82"
    },
    {
        "short": "VN",
        "emoji": "🇻🇳",
        "phoneCode": "84"
    },
    {
        "short": "HK",
        "emoji": "🇭🇰",
        "phoneCode": "852"
    },
    {
        "short": "MO",
        "phoneCode": "853",
        "emoji": "🇲🇴"
    },
    {
        "short": "KH",
        "emoji": "🇰🇭",
        "phoneCode": "855"
    },
    {
        "short": "LA",
        "phoneCode": "856",
        "emoji": "🇱🇦"
    },
    {
        "short": "CN",
        "emoji": "🇨🇳",
        "phoneCode": "86"
    },
    {
        "short": "BD",
        "emoji": "🇧🇩",
        "phoneCode": "880"
    },
    {
        "short": "TW",
        "emoji": "🇨🇳",
        "phoneCode": "886"
    },
    {
        "short": "TR",
        "emoji": "🇹🇷",
        "phoneCode": "90"
    },
    {
        "short": "IN",
        "emoji": "🇮🇳",
        "phoneCode": "91"
    },
    {
        "short": "PK",
        "emoji": "🇵🇰",
        "phoneCode": "92"
    },
    {
        "short": "AF",
        "emoji": "🇦🇫",
        "phoneCode": "93"
    },
    {
        "short": "LK",
        "emoji": "🇱🇰",
        "phoneCode": "94"
    },
    {
        "short": "MM",
        "emoji": "🇲🇲",
        "phoneCode": "95"
    },
    {
        "short": "MV",
        "emoji": "🇲🇻",
        "phoneCode": "960"
    },
    {
        "short": "LB",
        "emoji": "🇱🇧",
        "phoneCode": "961"
    },
    {
        "short": "JO",
        "emoji": "🇯🇴",
        "phoneCode": "962"
    },
    {
        "short": "SY",
        "emoji": "🇸🇾",
        "phoneCode": "963"
    },
    {
        "short": "IQ",
        "emoji": "🇮🇶",
        "phoneCode": "964"
    },
    {
        "short": "KW",
        "emoji": "🇰🇼",
        "phoneCode": "965"
    },
    {
        "short": "SA",
        "emoji": "🇸🇦",
        "phoneCode": "966"
    },
    {
        "short": "YE",
        "emoji": "🇾🇪",
        "phoneCode": "967"
    },
    {
        "short": "OM",
        "emoji": "🇴🇲",
        "phoneCode": "968"
    },
    {
        "short": "BL",
        "emoji": "🇵🇸",
        "phoneCode": "970"
    },
    {
        "short": "AE",
        "emoji": "🇦🇪",
        "phoneCode": "971"
    },
    {
        "short": "IL",
        "emoji": "🇮🇱",
        "phoneCode": "972"
    },
    {
        "short": "BH",
        "emoji": "🇧🇭",
        "phoneCode": "973"
    },
    {
        "short": "QA",
        "emoji": "🇶🇦",
        "phoneCode": "974"
    },
    {
        "short": "BT",
        "emoji": "🇧🇹",
        "phoneCode": "975"
    },
    {
        "short": "MN",
        "emoji": "🇲🇳",
        "phoneCode": "976"
    },
    {
        "short": "NP",
        "emoji": "🇳🇵",
        "phoneCode": "977"
    },
    {
        "short": "IR",
        "emoji": "🇮🇷",
        "phoneCode": "98"
    },
    {
        "short": "TJ",
        "emoji": "🇹🇯",
        "phoneCode": "992"
    },
    {
        "short": "TM",
        "emoji": "🇹🇲",
        "phoneCode": "993"
    },
    {
        "short": "AZ",
        "emoji": "🇦🇿",
        "phoneCode": "994"
    },
    {
        "short": "GE",
        "emoji": "🇬🇪",
        "phoneCode": "995"
    },
    {
        "short": "KG",
        "emoji": "🇰🇬",
        "phoneCode": "996"
    },
    {
        "short": "UZ",
        "emoji": "🇺🇿",
        "phoneCode": "998"
    }
];

export default countries;
