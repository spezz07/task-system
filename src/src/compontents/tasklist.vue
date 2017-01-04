<template>
<div>
    <mu-list>
        <mu-sub-header inset >2016-12-16</mu-sub-header>
        <mu-list-item title="Photos" describeText="已完成">
            <mu-avatar icon="assignment" backgroundColor="blue" slot="leftAvatar"/>
             111111111
            </mu-list-item>
        <mu-list-item title="Recipes" describeText="已完成" >
            <mu-avatar icon="assignment"  backgroundColor="blue"slot="leftAvatar"/>
              222222222
            </mu-list-item>
        <mu-list-item title="Work" describeText="已完成">
            <mu-avatar icon="assignment"  backgroundColor="blue"slot="leftAvatar"/>
              33333333333
            </mu-list-item>
    </mu-list>
    <mu-divider inset/>
    <mu-list>
        <mu-sub-header inset>2016-12-15</mu-sub-header>
        <mu-list-item title="Vacation itinerary" describeText="已完成">
            <mu-avatar icon="assignment" backgroundColor="blue" slot="leftAvatar" />
               4444444444444
        </mu-list-item>
        <mu-list-item title="Kitchen remodel" describeText="未完成">
            <mu-avatar icon="assignment" backgroundColor="yellow600" slot="leftAvatar" />
        5555555555555
        </mu-list-item>
    </mu-list>
    <mu-divider inset/>
    <mu-list>
        <mu-sub-header inset>2016-12-15</mu-sub-header>
        <mu-list-item title="Vacation itinerary" describeText="已完成">
            <mu-avatar icon="assignment" backgroundColor="blue" slot="leftAvatar" />
            4444444444444
        </mu-list-item>
        <mu-list-item title="Kitchen remodel" describeText="未完成">
            <mu-avatar icon="assignment" backgroundColor="yellow600" slot="leftAvatar" />
            5555555555555
        </mu-list-item>
    </mu-list>

</div>
</template>
<script>
    export default{
        data(){
            return{
              titleclass:{
                  fontSize:"28px"
              }
            }
        }
    }

</script>