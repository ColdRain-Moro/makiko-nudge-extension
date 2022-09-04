import { Listener, subscribeEvent } from "makiko-api"

let listener: Listener

type NudgeEvent = net.mamoe.mirai.event.events.NudgeEvent
const NudgeEvent = net.mamoe.mirai.event.events.NudgeEvent

/**
 * 
 * 插件加载
 */
// @ts-ignore
global.onLoad = () => {
    listener = subscribeEvent<NudgeEvent>(NudgeEvent, (event) => {
        if (event.getTarget().getId() == event.getBot().getId()) {
            event.getFrom().nudge().sendTo(event.getSubject())
        }
    })
}

/**
 * 插件卸载
 */
// @ts-ignore
global.onUnload = () => {
    listener.complete()
}