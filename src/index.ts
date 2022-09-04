import { GroupMessageEvent, Listener, subscribeEvent } from "makiko-api"

let listener: Listener

/**
 * 
 * 插件加载
 */
// @ts-ignore
this.onLoad = () => {
    listener = subscribeEvent<GroupMessageEvent>(GroupMessageEvent, (e) => {
        if (e.getMessage().contentToString() == "3G") {
            e.getGroup().sendMessage("重现3g荣光, 我辈义不容辞！")
        }
    })
}

/**
 * 插件卸载
 */
// @ts-ignore
this.onUnload = () => {
    listener.complete()
}