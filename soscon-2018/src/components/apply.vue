<template>
  <div>
    <img src="../../static/img/pic6.jpg" :style="{height:h1}" style="width: 100%;position: fixed" ></img>
    <div class="container">
      <div class="baoming">
        <div class="row">
          <div class="col s12 m4">
            <div    class="icon-block second applyContainer">
              <h2 class="center brown-text"><i class="material-icons co1">perm_camera_mic</i></h2>
              <h5 class="center">{{$t("Apply.speak1")}}</h5>
              <!--<p class="light">-->
              <div style="margin-top:40px;">
                <p>{{$t("Apply.speak2")}}
                  <!--<p style=">你是否愿意分享自己对开源和code的热爱和不一样的见解？</p>-->
                  <br/>{{$t("Apply.speak3")}}
                  <br/>{{$t("Apply.speak4")}}
                </p>
              </div>
              <div class="button" style="margin-bottom: 10px">
                <a class="waves-effect waves-light btn modal-trigger back1" @click="open3" style="vertical-align: bottom">{{$t("Apply.speak5")}}</a>
              </div>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block second applyContainer" >
              <h2 class="center brown-text"><i class="material-icons co2">favorite</i></h2>
              <h5 class="center">{{$t("Apply.volunteer1")}}</h5>
              <div style="margin-top:40px;">
                <p>{{$t("Apply.volunteer2")}}
                  <br/>{{$t("Apply.volunteer3")}}
                  <br/>{{$t("Apply.volunteer4")}}

                </p>
              </div>

              <div class="button" style="margin-bottom: 10px">
                <button class="waves-effect waves-light btn modal-trigger back2" @click="open2" style="vertical-align: bottom">{{$t("Apply.volunteer5")}}</button>
              </div>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block second applyContainer">
              <h2 class="center brown-text"><i class="material-icons co3">credit_card</i></h2>
              <h5 class="center">{{$t("Apply.ticket1")}}</h5>
              <div style="margin-top:40px;">
                <P>{{$t("Apply.ticket2")}}
                  <br>{{$t("Apply.ticket3")}}

                  <br>{{$t("Apply.ticket4")}}
                  <br>{{$t("Apply.ticket5")}}
                  <!--<br>第一轮放票将在4月22日正式开启-->
                </p>
              </div>
              <!-- Modal Trigger -->

              <div class="button" style="margin-bottom: 10px">
                <a class="waves-effect waves-light btn modal-trigger back3" @click="open1">{{$t("Apply.ticket6")}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Structure -->
    <div id="modal1" class="modal" >

      <form id="formTicket">

        <div class="modal-content row" style="box-shadow: black 0px 0px 5px 1px">
          <h5>{{$t("Apply.modal1")}}</h5>
          <p>
            {{$t("Apply.modal2")}}
          </p>
          <p>
            {{$t("Apply.modal3")}}
          </p>

          <div class="input-field col l6 s12 ">
            <i class="material-icons prefix">account_circle</i>
            <input id="ticketname" type="text" class="validate" name="realname">
            <label for="ticketname">{{$t("Apply.modal4")}}<!--<span style="color: red">*</span>--> </label>
          </div>

          <div class="input-field col l6 s12 ">
            <i class="material-icons prefix">school</i>
            <input id="school" type="text" class="validate" name="school">
            <label for="school">{{$t("Apply.modal5")}}<!--<span style="color: red">*</span>--> </label>
          </div>


          <div class="input-field col s12">
            <p style="font-size: medium">
              {{$t("Apply.modal6")}}
            </p>
            <select  class="browser-default" name="sex">
              <option value="" disabled selected>{{$t("Apply.modal6")}}</option>
              <option value="1">{{$t("Apply.modal7")}}</option>
              <option value="2">{{$t("Apply.modal8")}}</option>
              <option value="3">{{$t("Apply.modal9")}}</option>
              <option value="4">{{$t("Apply.modal10")}}</option>
            </select>
          </div>

          <div class="input-field col s12">
            <p style="font-size: medium">
              {{$t("Apply.modal11")}}
            </p>
            <select  class="browser-default" name="eat">
              <option value="" disabled selected>{{$t("Apply.modal11")}}</option>
              <option value="1">{{$t("Apply.modal12")}}</option>
              <option value="2">{{$t("Apply.modal13")}}</option>
              <option value="3">{{$t("Apply.modal14")}}</option>
            </select>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">mode_edit</i>
            <textarea id="icon_prefix4" class="materialize-textarea" name="foodNote"></textarea>
            <label for="icon_prefix4"> {{$t("Apply.modal15")}}</label>
          </div>

          <div class="input-field col s12">
            <p style="font-size: medium">
              {{$t("Apply.modal16")}}
            </p>
            <select  class="browser-default" name="experience">
              <option value="" disabled selected>{{$t("Apply.modal16")}}</option>
              <option value="1">{{$t("Apply.modal17")}}</option>
              <option value="2">{{$t("Apply.modal18")}}</option>
              <option value="3">{{$t("Apply.modal19")}}</option>
              <option value="4">{{$t("Apply.modal20")}}</option>
            </select>
          </div>

          <div class="input-field col s12">
            <i class="material-icons prefix">mode_edit</i>
            <textarea id="icon_prefix5" class="materialize-textarea" name="other"></textarea>
            <label for="icon_prefix5">{{$t("Apply.modal21")}}</label>
          </div>


        </div>

        <div class="modal-footer" >
          <input type="button" class="btn waves-effect waves-light" @click="subTicket" value="申请">
        </div>

      </form>

    </div>

    <!-- Modal Structure -->
    <div id="modal2" class="modal modal-fixed-footer" >

      <form id="form1">

        <div class="modal-content row" style="box-shadow: black 0px 0px 5px 1px">
          <h5>{{$t("Apply.modalvo1")}}</h5>
          <p>{{$t("Apply.modalvo2")}}
          </p>
          <p><span style="font-weight: 800">{{$t("Apply.modalvo3")}}</span>{{$t("Apply.modalvo4")}}
          </p>
          <p style="color: red">{{$t("Apply.modalvo5")}}</p>
          <p>
          <div class="input-field col l6 s12 ">
            <i class="material-icons prefix">account_circle</i>
            <input id="name" type="text" class="validate" name="name">
            <label for="name">{{$t("Apply.modalvo6")}}<span style="color: red">*</span> </label>
          </div>

          <div class="input-field col l6 s12 ">
            <i class="material-icons prefix">email</i>
            <input id="email" type="email" class="validate" name="email">
            <label for="email">{{$t("Apply.modalvo7")}}<span style="color: red">*</span> </label>
          </div>

          <div class="input-field col s12">
            <i class="material-icons prefix">phone</i>
            <input id="phonenumber" type="number" class="validate" name="phonenumber">
            <label for="phonenumber">{{$t("Apply.modalvo8")}}<span style="color: red">*</span> </label>
          </div>

          <!--<div class="input-field col s12">
            <select  class="browser-default" >
              <option value="" disabled>志愿者分组</option>
              <option value="1">摄影组</option>
              <option value="2">翻译组</option>
              <option value="3">场务组</option>
              <option value="4">服务组</option>
              <option value="5">放映组</option>
              <option value="6">宣传组</option>
              <option value="7">赞助组</option>
            </select>
          </div>-->

          <div class="row">
            <span style="font-size: 1rem">{{$t("Apply.modalvoloption1")}}<span style="color: red">*</span> </span><br>
            <label class="col "><input type="checkbox" name="teams" value="1"><i>✓</i>{{$t("Apply.modalvoloption2")}}</label><br>
            <label class="col "><input type="checkbox" name="teams" value="5"><i>✓</i>{{$t("Apply.modalvoloption6")}}</label><br>
            <label class="col "><input type="checkbox" name="teams" value="6"><i>✓</i>{{$t("Apply.modalvoloption7")}}</label><br>
            <label class="col "><input type="checkbox" name="teams" value="7"><i>✓</i>{{$t("Apply.modalvoloption8")}}</label><br>
            <label class="col "><input type="checkbox" name="teams" value="8"><i>✓</i>{{$t("Apply.modalvoloption9")}}</label><br>
            <label class="col "><input type="checkbox" name="teams" value="9"><i>✓</i>{{$t("Apply.modalvoloption10")}}</label><br>
          </div>



          <div class="row">
            {{$t("Apply.modalvolu1")}}<span style="color: red">*</span>
            <br>
            <span style="font-size: 0.5rem;margin-bottom: 0px">{{$t("Apply.modalvolu2")}}</span>
            <div class="input-field col s12">
              <i class="material-icons prefix">mode_edit</i>
              <textarea id="icon_prefix2" class="materialize-textarea" name="SelfIntroduction"></textarea>
              <label for="icon_prefix2">{{$t("Apply.modalvolu3")}}</label>
            </div>
          </div>

          <div class="row">
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">mode_edit</i>
                <textarea id="icon_prefix3" class="materialize-textarea" name="note"></textarea>
                <label for="icon_prefix3">{{$t("Apply.modalvolu4")}}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer" >
          <input type="button" class="btn waves-effect waves-light" @click="sub" value="提交">
        </div>
      </form>
    </div>

    <!-- Modal Structure -->
    <div id="modal3" class="modal modal-fixed-footer" >
      <div class="modal-content" style="box-shadow: black 0px 0px 5px 1px">
        <h4>{{$t("Apply.modalspeak")}}</h4>

        <div class="divider"></div>
        <div class="section">
          <h5>{{$t("Apply.modalspeak1")}}</h5>

          <ul>
            <li>{{$t("Apply.modalspeak2")}}</li>
            <br>
            <li>{{$t("Apply.modalspeak3")}}</li>
            <br>
            <li>{{$t("Apply.modalspeak4")}}</li>
            <br>
            <li>{{$t("Apply.modalspeak5")}}</li>
            <br>
            <li>{{$t("Apply.modalspeakn")}}</li>
          </ul>

        </div>

        <div class="divider"></div>
        <div class="section">
          <h5>{{$t("Apply.modalspeak6")}}</h5>

          <ul>
            <li>{{$t("Apply.modalspeak7")}}</li>
            <li>{{$t("Apply.modalspeak8")}}</li>
            <li>{{$t("Apply.modalspeak9")}}
            </li>
            <li>{{$t("Apply.modalspeak10")}}</li>
          </ul>
        </div>

        <div class="divider"></div>
        <div class="section">
          <h5>{{$t("Apply.modalspeakletter")}}</h5>

          <ul>
            <li>{{$t("Apply.modalspeakletter1")}}</li>
            <li>{{$t("Apply.modalspeakletter2")}}</li>
            <li>{{$t("Apply.modalspeakletter3")}}</li>
            <li>{{$t("Apply.modalspeakletter4")}}</li>
          </ul>

        </div>

        <div class="divider"></div>
        <div class="section">
          <h5>{{$t("Apply.modalspeakmethod")}}</h5>

          <ul>
            <li>{{$t("Apply.modalspeakmethod1")}}</li>
          </ul>

        </div>

        <div class="divider"></div>
        <div class="section" >
          <h5>{{$t("Apply.modalspeaknotice1")}}
          </h5>

          <ul >
            <li>{{$t("Apply.modalspeaknotice2")}}
            </li>
            <li>{{$t("Apply.modalspeaknotice3")}}</li>
          </ul>

        </div>

      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">{{$t("Apply.modalagree")}}</a>
      </div>
    </div>


  </div>

</template>

<script>
    let h_screen = document.documentElement.clientHeight
    import 'jquery.cookie'
    export default {
        name: "apply",
        methods: {
          open1() {
            if(this.name[0] === "none") {
              swal({
                text: this.$t('JS.loginFirst'),
                type: 'warning',
              })
            }
            else if(this.name[1] === true){
              swal({
                text:this.$t('JS.haveQrcode')
              })
            }
            else if(this.leftTicket <= 0){
              swal({
                text:this.$t('JS.noTicket')
              })
            }
            else {
              $('.modal').modal();
              $('#modal1').modal('open');
            }
          },
          open2() {
            swal({
              text:'志愿者报名已结束',
              type:'info',
            })
          },
          open3() {
            $('.modal').modal();
            $('#modal3').modal('open');
          },
          sub() {
            var that = this
            $.ajax({
              method: 'post',
              url: '/account/register',
              data: $('#form1').serialize()
            }).done(function (data) {
              if (data.result !== '提交成功'){
              swal({
                text: that.$t('JS.vlerrorSub'),
                type: 'error',
                timer: 2000
              })
            }
            else {
              swal({
                text: that.$t('JS.successSub'),
                type: 'success',
                timer: 3000
              })
                $('#form1')[0].reset()

            }
            })
          },
          subTicket(){
            $.ajax({
              method:'post',
              url:'/account/ticket',
              data: $('#formTicket').serialize()
            }).done(function (data) {
              if(data.result === '领取成功'){
                swal({
                  text:data.result,
                  type:'success',
                  timer:2000
                })
                setTimeout(function () {
                  window.location.reload()
                },1000)
              }
              else if(data.result==='没票了'){
                swal({
                  text:data.result,
                  type:'warning',
                  timer:2000
                })
                setTimeout(function () {
                  window.location.reload()
                },1000)
              }
              else{
                swal({
                  text:data.result,
                  type:'error',
                  timer:2000
                })
              }

            })
          },
        },
        computed:{
          h1(){
            console.log(h_screen + 'px')
            return h_screen + 'px'
          },
          leftTicket(){
            let l;
            $.ajax({
              method:'post',
              url:'/account/leftticket',
              async:false
            }).done(function (data) {
              l = data.left
            })
            return l
          },
          name(){
            let n,h;
            $.ajax({
              method:'post',
              url:'/account/check',
              async:false
            }).done(function (data) {
              n = data.name
              h = data.haveTicket
            })
            return [n,h]
          },
          img(){
            return '/account/img/'+this.name[0]
          }
      }

    }
</script>

<style scoped>
  p{
    font-size: 0.85rem;
  }
  body {
    font-family: "Microsoft YaHei UI";
  }
  .second{
    display:flex;
    flex-direction: column;
    align-items: center;

  }
  .co1{
    color:rgb(244,208,0);
  }
  .co2{
    color:rgb(229,131,8);
  }
  .co3{
    color:rgb(220,87,18);
  }
  .back1{
    background-color: rgb(244,208,0)!important;
  }
  .back2{
    background-color: rgb(229,131,8)!important;
  }
  .back3{
    background-color: rgb(220,87,18)!important;
  }
  label {font-size:1rem;cursor:pointer;}
  label i {font-size:1rem;font-style:normal;display:inline-block;width:12px;height:12px;text-align:center;line-height:12px;color:#fff;vertical-align:middle;margin:-2px 2px 1px 0px;border:#2489c5 1px solid;}
  input[type="checkbox"],input[type="radio"] {display:none;}
  input[type="radio"] + i {border-radius:7px;}
  input[type="checkbox"]:checked + i,input[type="radio"]:checked + i {background:#2489c5;}
  input[type="checkbox"]:disabled + i,input[type="radio"]:disabled + i {border-color:#ccc;}
  input[type="checkbox"]:checked:disabled + i,input[type="radio"]:checked:disabled + i {background:#ccc;}
</style>
