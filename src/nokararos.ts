export const data = new Map<any, any>(); //This thing is important
import { clearMapdata } from './util/Map.js';
import { join_event } from './core/playerSpawn/join_events.js';
import { ac_a } from './core/entityHitEntity/AutoClicker/ac_a.js';
import { ac_b } from './core/entityHitBlock/AutoClicker/ac_b.js';
import { nuker_a } from './core/blockBreak/Nuker/nuker_a.js';
import { speed_a } from './core/tickEvents/Speed/speed_a.js';
import { nofall_a } from './core/tickEvents/NoFall/nofall_a.js';
import { killaura_a } from './core/entityHitEntity/Killaura/killaura_a.js';
import { killaura_b } from './core/entityHitEntity/Killaura/killaura_b.js';
import { killaura_c } from './core/entityHitEntity/Killaura/killaura_c.js';
import { killaura_d } from './core/entityHitEntity/Killaura/killaura_d.js';
import { killaura_e } from './core/entityHitEntity/Killaura/killaura_e.js';
import { killaura_f } from './core/entityHitEntity/Killaura/killaura_f.js';
import { surround_a } from './core/blockBreak/Surround/surround_a.js';
import { surround_b } from './core/blockPlace/Surround/surround_b.js';
import { scaffold_a } from './core/blockPlace/Scaffold/scaffold_a.js';
import { aura_a } from './core/blockPlace/Aura/aura_a.js';
import { reach_a } from './core/entityHitEntity/Reach/reach_a.js';
import { spam_a } from './core/chatSend/Spam/spam_a.js';
import { spam_b } from './core/chatSend/Spam/spam_b.js';
import { swinging_head } from './core/tickEvents/swinging_head.js';
import { spammer_a } from './core/chatSend/Spammer/spammer_a.js';
import { spammer_b } from './core/chatSend/Spammer/spammer_b.js';
import { spammer_c } from './core/chatSend/Spammer/spammer_c.js';
import { spammer_d } from './core/chatSend/Spammer/spammer_d.js';
import { invaildsprint_a } from './core/tickEvents/InvaildSprint/invaildsprint_a.js';
import { invaildSprint_b } from './core/tickEvents/InvaildSprint/invaildsprint_b.js';
import { invaildSprint_c } from './core/tickEvents/InvaildSprint/invaildsprint_c.js';
import { crasher_a } from './core/tickEvents/Crasher/crasher_a.js';
import { crasher_b } from './core/entityHitEntity/Crasher/crasher_b.js';
import { crasher_c } from './core/entitySpawn/Crasher/crasher_c.js';
import { items } from './core/tickEvents/Items/items.js';
import { aimbot_a } from './core/tickEvents/AimBot/aimbot_a.js';
import { fly_a } from './core/tickEvents/Fly/fly_a.js';
import { fly_b } from './core/tickEvents/Fly/fly_b.js';
import { autototem_a } from './core/EntityTriggerEvents/AutoTotem/autoTotem_a.js';
import { autototem_b } from './core/EntityTriggerEvents/AutoTotem/autoTotem_b.js';
import { autototem_c } from './core/EntityTriggerEvents/AutoTotem/autoTotem_c.js';
import { autoshield_a } from './core/EntityTriggerEvents/AutoShield/autoShield_a.js';
import { autoshield_b } from './core/EntityTriggerEvents/AutoShield/autoShield_b.js';
import { autoshield_c } from './core/EntityTriggerEvents/AutoShield/autoShield_c.js';
import { cbe_a } from './core/EntityTriggerEvents/CBE/cbe_a.js';
import { autotool_a } from './core/entityHitBlock/AutoTool/autotool_a.js';
import { insteabreak_a } from './core/blockBreak/InsteaBreak/insteabreak_a.js';
import { hurt_event } from './core/entityHurt/hurt_event.js';
import { knockback_a } from './core/tickEvents/KnockBack/knockback_a.js';
import { phase_a } from './core/tickEvents/Phase/phase_a.js';

clearMapdata();
join_event();
knockback_a();
insteabreak_a();
autotool_a();
autototem_a();
autototem_b();
autototem_c();
autoshield_a();
autoshield_b();
autoshield_c();
aimbot_a();
items();
crasher_a();
crasher_b();
crasher_c();
invaildsprint_a();
invaildSprint_b();
invaildSprint_c();
spammer_a();
spammer_b();
spammer_c();
spammer_d();
swinging_head();
spam_b();
spam_a();
reach_a();
aura_a();
ac_a();
ac_b();
nuker_a();
speed_a();
nofall_a();
killaura_a();
killaura_b();
killaura_c();
killaura_d();
killaura_e();
killaura_f();
surround_a();
surround_b();
scaffold_a();
fly_a();
fly_b();
hurt_event();
cbe_a();
phase_a()