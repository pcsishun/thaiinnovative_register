<template>
    <div class="qr-scaner-container">
        <div class="qrbody-content">
            <!-- <div class="set-qr-scaner">
                <div class="camera-set"  v-if="QRreader === true">
                    <qrcode-stream  @decode="onDecode"></qrcode-stream>
                </div>
                <div v-if="QRreader === false">
                    <button class="btn btn-primary" @click="onSetScan">Open QR camera</button>
                </div>
                <div v-if="QRreader === true">
                    <button class="btn btn-primary" @click="onSetScan">Close QR camera</button>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
// import { QrcodeStream } from 'vue-qrcode-reader'

export default {
    components:{
        // QrcodeStream
    },
    data(){
        return{
            QRreader: false
        }
    },
    methods:{
        onDecode(data){
            console.log(data)
        },
        onSetScan(){
            if(this.QRreader === false){
                this.QRreader = true
            }
            else if(this.QRreader === true){
                this.QRreader = false
            }
            
        }
    }
}
</script>

<style>
.qr-scaner-container{
    margin-top: 50px;
    text-align: center;
}
.camera-set{
    margin: auto;
    width: 500px;
    height: 500px;
    border-radius: 8px;
}
.btn{
    margin-top: 1rem;
}
</style>