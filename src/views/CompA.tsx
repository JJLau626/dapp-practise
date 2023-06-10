// 为什么是这个库
import { Component, Vue } from 'vue-property-decorator';
import style from './CompA.module.scss';
@Component
export default class CompA extends Vue {

    msg: string = 'TSX Components';

    render() {
        return <div class={style.msg}> {this.msg} </div>
    }

    mounted() {
        console.log(style);
        // @ts-ignore
        console.log(this.$style);
        
    }
}