import { world } from "@minecraft/server";
import en_US from "./en_US";
import config from "../Config";
import zh_TW from "./zh_TW";
import ar from "./ar";
//import vi_VN from "./vi_VN"; dịch hơi lâu thông kẻm :)
import { LangType } from "./LangType";

// declare the dynamic language
let languageNow = config.language

// All language exporter
export const langs: { [key: string]: { [key: string]: LangType | string } } = {
    "en_US": en_US,
    "zh_TW": zh_TW,
    "ar": ar,
    //"vi_VN": vi_VN
}

// when world initialized, update the language
world.afterEvents.worldInitialize.subscribe(() => {
    const language = world.getDynamicProperty("matrix:language") as string
    if (language === undefined) return;else
    if (!Object.keys(langs).includes(language)) return world.setDynamicProperty("matrix:language", undefined);else

    languageNow = language
})

export function changeLanguage (lang: string) {
    if (Object.keys(langs).includes(lang)) {
        languageNow = lang
        world.setDynamicProperty("matrix:language", lang)
        return true
    }
    return false
}
export const getAllLang = () => Object.keys(langs)

export default function (key: LangType): string {
    return langs[languageNow][key] ?? "[???]"
}
