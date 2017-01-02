<template>
    <div>
    <mu-card  :style="height">
        <mu-card-title title="Content Title" subTitle="Content Title"/>
        <mu-card-text>
            散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
            散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
            散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
            散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
            散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。

        </mu-card-text>
        <mu-card-actions>
            <mu-flat-button label="Action 1"/>
            <mu-flat-button label="Action 2"/>
        </mu-card-actions>
    </mu-card>
    </div>
</template>

<script>
    export default{
        data:function () {
            return{
                height:{
                    'minHeight':'880px',
                }
            }
        }
    }

</script>