define(["equation-error-msg-template","lang-json"],function(s,i){var e=Backbone.View.extend({initialize:function(s){this.listenTo(this.model,"OnPopupVisibilityChange",this.OnPopupVisibilityChange),this.listenTo(this.model,"OnMultipleYValuesForOneXValue",this.showError),this.accManager=s.accManager,this.bIsVisible=!1,this.bIsPopupAlreadyOpen=!1,this.langJson=i.erromsgpopupJSON,this.accJson=i.errormsgpopupAccJSON,this.render()},render:function(){var s=Handlebars.templates["equation-error-msg-template"]({}).trim()
this.$el.append(s),this.$(".plg-error-msg-popup").html(this.langJson.title),this.$(".plg-error-msg").html(this.langJson.para_one),this.$(".plg-error-ok-btn").html(this.langJson.btn_ok),this._attachEvents(),this.showErrorMsgPopup(!1)},events:{"keyup #plg-equation-error-msg-panel":"popupHolderKeyup"},popupHolderKeyup:function(s){if(null!=this.accManager&&this.accManager.isAccessibilityOn){var i=s.keyCode||s.which
27===i&&this.showErrorMsgPopup(!1)}},_attachEvents:function(){var s=this
this.$(".plg-error-msg-popup-close-exp,.plg-error-ok-btn").on("click",function(){s.showErrorMsgPopup(!1)})},showErrorMsgPopup:function(s){s?this.$(".plg-equation-error-msg-panel").show():this.$(".plg-equation-error-msg-panel").hide(),this.bIsVisible=s,this.model.PopupVisibilityChange({bIsVisible:s,popupName:"Error Msg Popup",affectedExpData:null})},showError:function(){this.showErrorMsgPopup(!0)},OnPopupVisibilityChange:function(s){null!=this.accManager&&this.accManager.isAccessibilityOn&&(s.bIsVisible?(this.setAccOn(),this.$("#plg-error-popup-holder").focus()):(this.setAccOff(),this.bIsPopupAlreadyOpen=!1))},setAccOn:function(){for(var s,i=this.accJson.length,e=0;i>e;e++)s=this.accJson[e],this.accManager.setTabIndex(this.$(s.id),s.tabIndex),this.accManager.setAccText(this.$(s.id),s.accText,null)},setAccOff:function(){for(var s,i=this.accJson.length,e=0;i>e;e++)s=this.accJson[e],this.accManager.setTabIndex(this.$(s.id),-1),this.accManager.setAccText(this.$(s.id),"",null)
this.$(".acc-element").on("keydown",_.bind(this.accManager._keyPressHandler,this))}})
return e})