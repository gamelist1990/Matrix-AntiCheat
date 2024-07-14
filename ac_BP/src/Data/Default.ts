/**
 * @author Matrix Team
 * @description Default preset for AntiCheat
 * @warning NEVER CHANGE THIS FILE IF YOU DON'T KNOW WHAT YOU ARE DOING
 */

/**
 * @param {string} AES_key
 * @description AES key for loading config
 */
export const dynamic = {
    followUserConfig: false, // State if we use UserConfig or not
};

// Don't change this config!
export default {
    configVersion: 1,
    language: "en_US",
    createScoreboard: true,
    flagMode: "admin",
    lockdowncode: "AbCdEfGh",
    passwordCold: 5000,
    slient: false,
    otherPrefix: [],
    commands: {
        passwordSetting: {
            password: "password",
            hash: "",
            usingHash: false,
        },
        prefix: "-",
        example: {
            enabled: true,
            adminOnly: true,
            requireTag: ["mod", "manager"],
        },
            about: {
                enabled: true,
                adminOnly: false,
                requireTag: [],
            },
            help: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            toggles: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            toggle: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            op: {
                enabled: true,
                adminOnly: false,
                requireTag: [],
            },
            deop: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            passwords: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            flagmode: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            rank: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            rankclear: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            defaultrank: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            showallrank: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            ban: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            unban: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            unbanremove: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            unbanlist: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            freeze: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            unfreeze: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            mute: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            unmute: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            vanish: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            unvanish: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            invcopy: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            invsee: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            echestwipe: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            lockdowncode: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            lockdown: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            unlock: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            adminchat: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            bordersize: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            matrixui: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            banrun: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            openlog: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
            reset: {
                enabled: true,
                adminOnly: true,
                requireTag: [],
            },
    },
    punishment_kick: {
        reason: "Bad behavior",
    },
    punishment_ban: {
        minutes: 1440,
        reason: "Unfair advantage",
    },
    example_anticheat_module: {
        enabled: true,
        punishment: "ban",
    },
    chatRank: {
        enabled: true,
        defaultRank: "§pMember",
        showAllRank: true,
    },
    intergradedAntiSpam: {
        enabled: true,
        chatFilter: {
            enabled: true,
        },
        linkEmailFilter: {
            enabled: true,
        },
        spamFilter: {
            enabled: true,
            maxRepeats: 3,
            maxLength: 128,
            maxMessagesInFiveSeconds: 3,
        },
    },
    dimensionLock: {
        enabled: false,
    },
    logsettings: {
        maxStorge: 200,
        pageShows: 20,
        utc: 0,
        logCommandUsage: false,
        logPlayerRegister: false,
        logCheatFlag: true,
        logCheatPunishment: true,
    },
    antiAutoClicker: {
        enabled: true,
        maxClicksPerSecond: 24,
        timeout: 200,
        punishment: "kick",
        maxVL: 4,
    },
    antiKillAura: {
        enabled: true,
        minAngle: 160,
        timeout: 200,
        maxEntityHit: 2,
        punishment: "ban",
        maxVL: 3,
    },
    antiReach: {
        enabled: true,
        maxReach: 4.21,
        maxYReach: 4.8,
        punishment: "kick",
        maxVL: 3,
    },
    antiFly: {
        enabled: true,
        punishment: "ban",
        maxVelocity: 0.7,
        maxVL: 4,
    },
    antiNoFall: {
        enabled: true,
        punishment: "ban",
        float: 15,
        maxVL: 3,
    },
    antiNoClip: {
        enabled: true,
        punishment: "ban",
        clipMove: 1.6,
        maxVL: 4,
    },
    antiSpeed: {
        enabled: true,
        punishment: "kick",
        maxVL: 4,
        minSpeedLog: 3,
    },
    antiTimer: {
        enabled: true,
        punishment: "ban",
        maxVL: 4,
        minTimerLog: 3,
    },
    antiNuker: {
        enabled: true,
        maxBreakPerTick: 6,
        timeout: 100,
        punishment: "ban",
        solidOnly: true,
        maxVL: 0,
    },
    antiScaffold: {
        enabled: true,
        timeout: 20,
        maxAngle: 175,
        factor: 1,
        minRotation: 20,
        maxBPS: 5,
        punishment: "kick",
        maxVL: 4,
    },
    antiNoSlow: {
        enabled: true,
        maxWebSpeed: 0.85,
        maxItemSpeed: 0.2,
        itemUseTime: 350,
        timeout: 60,
        punishment: "ban",
        maxVL: 4,
    },
    antiBreaker: {
        enabled: false,
        timeout: 60,
        writeList: ["minecraft:cake", "minecraft:dragon_egg"],
        punishment: "ban",
        maxVL: 4,
        experimental: true,
    },
    antiSpammer: {
        enabled: true,
        punishment: "ban",
        maxVL: 0,
    },
    antiBlockReach: {
        enabled: true,
        maxPlaceDistance: 8,
        maxBreakDistance: 8,
        timeout: 60,
        punishment: "ban",
        maxVL: 0,
    },
    antiAim: {
        enabled: true,
        punishment: "kick",
        maxVL: 4,
    },
    antiTower: {
        enabled: true,
        minDelay: 200,
        timeout: 60,
        punishment: "kick",
        maxVL: 2,
        experimental: true,
    },
    antiGameMode: {
        enabled: false,
        bannedGameMode: [1],
        returnDefault: true,
        returnGameMode: 0,
        punishment: "ban",
        maxVL: 4,
    },
    antiNameSpoof: {
        enabled: true,
        punishment: "ban",
    },
    antiAutoTool: {
        enabled: false,
        punishment: "kick",
        maxVL: 4,
        toolType: ["axe", "shovel", "pickaxe", "sword"],
        experimental: true,
    },
    antiFastBreak: {
        enabled: false,
        punishment: "ban",
        maxVL: 4,
        solidOnly: true,
        maxBPS: 1.2,
        toolLimit: 4.2,
        toolType: ["axe", "shovel", "pickaxe", "sword"],
        matchType: {
            wood: 3.9,
            stone: 5.1,
        },
        experimental: true,
    },
    antiXray: {
        enabled: false,
        notifyAt: ["diamond_ore", "ancient_debris"],
        experimental: true,
    },
    antiDisabler: {
        enabled: true,
        maxVL: 0,
        punishment: "ban",
    },
    antiIllegalItem: {
        enabled: false,
        punishment: "ban",
        maxVL: 0,
        checkIllegal: true, // The true illegal item.
        checkUnatural: true, // Ban extra nbt information
        checkGivableItem: true, // Ban the item which cannot get in suurival
        checkEnchantment: true, // Ban bad enchantment
        checkEducationalItem: true, // Ban educational item
    },
    antiElytraFly: {
        enabled: true,
        maxVL: 4,
        fallDiscycle: 4,
        maxFallDis: 1.05,
        maxRatio: 10,
        punishment: "kick",
        experimental: true,
    },
    antiFastUse: {
        enabled: true,
        minUseTime: 20,
        timeout: 60,
        punishment: "ban",
        maxVL: 2,
    },
    antiAuto: {
        enabled: true,
        punishment: "ban",
        maxVL: 2,
    },
    antiCommandBlockExplolit: {
        enabled: false,
        punishment: "ban",
        maxVL: 0,
        cancelPlacement: ["minecraft:bee_nest", "minecraft:beehive", "minecraft:moving_block", "minecraft:movingBlock", "minecraft:movingblock"],
        cancelUsage: ["minecraft:axolotl_bucket", "minecraft:cod_bucket", "minecraft:powder_snow_bucket", "minecraft:pufferfish_bucket", "minecraft:salmon_bucket", "minecraft:tadpole_bucket", "minecraft:tropical_fish_bucket"],
    },
    antiCrasher: {
        enabled: true,
        punishment: "ban",
        maxVL: 0,
    },
    antiBot: {
        enabled: false,
        punishment: "ban",
        maxVL: 0,
        clickSpeedThershold: 6,
        timer: 1,
        maxTry: 3,
    },
    worldBorder: {
        enabled: false,
        checkEvery: 2,
        radius: 250000,
        stopAdmin: false,
        centerX: 0,
        centerZ: 0,
        useSpawnLoc: true,
    },
    clientAuth: {
        enabled: false,
        checkForTick: 5,
        punishment: "kick",
        maxVL: 0,
        tpOffset: 1,
    },
    banrun: {
        command: "",
        enabled: false,
    },
    blacklistedMessages: ["discord.gg", "dsc.gg", "@outlook.com", "@gmail.com", "@hotmail.com", "discordapp.com", "discord.com/invite/", "https://", "http://", "the best minecraft bedrock utility mod", "disepi/ambrosial", "aras"],
    exN: 1,
};
