        // 公司字段
        // loanCompany_name  重庆市中鸿小额贷款有限责任公司
        // loanCompany_shortname  中鸿小贷
        // loanCompany_association  重庆市小额贷款公司协会
        // loanCompany_legal  公司法人
        // loanCompany_authorizedPerson  公司授权代表人
        // loanCompany_registeredAddress 公司註冊地址
        // loanCompany_contact  公司联系人
        // loanCompany_tel  公司聯繫電話
        // loanCompany_contactAddress 公司联系地址
        // loanCompany_localCity  中国重庆市
        // loanCompany_signedAddress  重庆市渝北区
        // loanCompany_arbitration1 重庆仲裁委员会
        // loanCompany_arbitration2 中国国际经济贸易仲裁委员会西南分会
        // loanCompany_late  逾期
        // loanCompany_payCompanyName  支付机构名称  重庆易极付科技有限公司
        // loanCompany_payCompanyShortname  支付机构简称 易极付



        // 个人字段
        // borrowerName 借款人
        // borrowerCertNo 身份证号码
        // residentialAddress 住址 / 联系地址
        // borrowerName 联系人
        // borrowerTell 联系电话
        // loanMonths 借款时长
        // loanStartTimeYear 年
        // loanStartTimeMonth 月
        // loanStartTimeDate 日
        // loanEndTimeYear
        // loanEndTimeMonth
        // loanEndTimeDate
        // lendAmount 借款金额
        // loanMonths 借款期限
        // annualRate 执行月利率
        // 收款
        // sellerName 银行账户名
        // selleraccountNumber 银行账号
        // selleropeningInstitution 开户银行
        // 还款
        // borrowerName
        // borroweraccountNumber
        // borroweropeningInstitution
        // productName 服务名称


        $(function() {
            var fastReg = function() {
                var InterValObj; //timer鍙橀噺锛屾帶鍒舵椂闂�
                var count = 120; //闂撮殧鍑芥暟锛�1绉掓墽琛�
                var curCount = 0; //褰撳墠鍓╀綑绉掓暟
                var inviCode = ""; //閭€璇风爜
                var codeLength = 6; //楠岃瘉鐮侀暱搴�
                function sendVerifyCode(mobile, verifycode, nationCode) {
                    $.getJSON("/validate/send-verify-sms-nsc?type=register&mobile=" + mobile + "&captcha=" + verifycode + "&nation_code=" + nationCode, function(result) {
                        if (!result.code) {
                            curCount = count;
                            $("#getCaptcha").val(curCount + "绉掑悗閲嶆柊鑾峰彇");
                            $("#getCaptcha").attr("disabled", "disabled").removeClass('get-captcha-enabled');
                            InterValObj = window.setInterval(setRemainTime, 1000); //鍚姩璁℃椂鍣紝1绉掓墽琛屼竴娆�
                        } else if (result.code == "1000") {
                            refreshVerifyCode();
                            $('#messagebox').show().text(result.msg);
                        } else if (result.code == "1002" || result.code == "1003") {
                            refreshVerifyCode();
                            $('#messagebox').show().text(result.msg);
                        } else if (result.code == "-1") {
                            refreshVerifyCode();
                            $('#verifycode').addClass('error');
                            $('#messagebox').show().text(result.msg);
                        }
                    });
                };
                // 鏄惁姝ｅ湪鍙戦€佺煭淇�
                function isSending() {
                    return curCount != 0;
                }
                // 鍒锋柊楠岃瘉鐮佸嚱鏁�
                function refreshVerifyCode() {
                    if (isSending())
                        return;
                    var verifycode = '/validate/captcha?text=' + Math.random(),
                        vrf = $('#verifycode').val();
                    $('.vrfimg').attr('src', verifycode);
                }
                //timer澶勭悊鍑芥暟
                function setRemainTime() {
                    if (curCount == 0) {
                        window.clearInterval(InterValObj); //鍋滄璁℃椂鍣�
                        refreshVerifyCode();
                        $("#getCaptcha").val("閲嶆柊鑾峰彇楠岃瘉鐮�");
                        $("#getCaptcha").removeAttr("disabled").addClass('get-captcha-enabled');
                    } else {
                        curCount--;
                        $("#getCaptcha").val(curCount + "绉掑悗閲嶆柊鑾峰彇");
                    }
                }
                //鑷畾涔夊紓姝ラ獙璇佸浘褰㈤獙璇佺爜
                // $.validator.addMethod("verify",function(value,element){
                // 	var returnVal = false;
                //        $.ajax({
                //            type:"get",
                //            async:false,
                //            url:"/validate/captcha/verify?text=" + $('#verifycode').val(),
                //            success:function(response){
                //                if(!response.code){
                //                    returnVal = !response.code;
                //                    $("#getCaptcha").removeAttr("disabled").addClass('get-captcha-enabled');
                //                }
                //            }
                //        });
                //        return returnVal;
                //    },"鍥惧舰楠岃瘉鐮佷笉姝ｇ‘");
                //楠岃瘉鐢ㄦ埛鏄惁杈撳叆鎵嬫満鍙�
                $("#username").bind('input propertychange', function() {
                    if ($(this).val() != "") {
                        $("#getCaptcha").removeAttr("disabled").addClass('get-captcha-enabled');
                    } else {
                        $("#getCaptcha").attr("disabled", "disabled").removeClass('get-captcha-enabled');
                    }
                });
                //function(event) {
                //	if( $(this).val()!="" ) {
                //		$("#getCaptcha").removeAttr("disabled").addClass('get-captcha-enabled');
                //	} else {
                //		$("#getCaptcha").attr("disabled", "disabled").removeClass('get-captcha-enabled');
                //	}
                //}
                // 楠岃瘉鐢ㄦ埛淇℃伅鏄惁鍏ㄩ儴濉啓
                $(".regfm-info-box input").bind('input propertychange', function(event) {
                    var pwdStr = $("#password").val().length,
                        verifycode = $("#verifycode").val().length,
                        username = $("#username").val().length,
                        reg_captcha = $(".reg-captcha").val().length
                    if (pwdStr == '' || verifycode == '' || username == '' || reg_captcha == '' || pwdStr < 6) {
                        $(".submit-btn").attr("disabled", "disabled").removeClass('get-captcha-enabled');
                    } else {
                        $(".submit-btn").removeAttr("disabled").addClass('get-captcha-enabled');
                    };
                });

                function fastRegValidate(callbackUrl) {
                    $("#fastReg").validate({
                        errorLabelContainer: "#messagebox",
                        rules: {
                            mobile: {
                                required: true,
                                isMobile: true
                            },
                            captcha: {
                                required: true,
                                stringCheck: true,
                                minlength: 6
                            },
                            password: {
                                required: true,
                                stringCheck: true,
                                minlength: 6
                            },
                            lawterms: {
                                required: true
                            },
                            randomvrf: {
                                required: true,
                                maxlength: 4,
                                minlength: 4
                            }
                        },
                        messages: {
                            mobile: {
                                required: "璇疯緭鍏ユ偍鐨勬墜鏈哄彿鐮�",
                                isMobile: "璇疯緭鍏ヤ竴涓湁鏁堢殑鎵嬫満鍙风爜"
                            },
                            captcha: {
                                required: "璇疯緭鍏ョ煭淇￠獙璇佺爜",
                                stringCheck: "楠岃瘉鐮佹牸寮忎笉姝ｇ‘",
                                minlength: "楠岃瘉鐮佽嚦灏戝叚浣�"
                            },
                            lawterms: {
                                required: "璇烽槄璇诲苟鍚屾剰鏈０鏄�"
                            },
                            password: {
                                required: "璇疯緭鍏ユ偍鐨勫瘑鐮�",
                                stringCheck: "瀵嗙爜鍙兘鍖呮嫭鑻辨枃瀛楁瘝銆佹暟瀛楀拰涓嬪垝绾�",
                                minlength: "瀵嗙爜鑷冲皯闇€瑕佸叚浣�"
                            },
                            randomvrf: {
                                required: "璇疯緭鍏ラ獙璇佺爜",
                                minlength: "鍥惧舰楠岃瘉鐮侀渶瑕佸洓浣�"
                            }
                        },
                        showErrors: function(errorMap, errorList) {
                            if ($('#messagebox label:visible').length > 0 && this.errorList.length)
                                return;

                            //  绉婚櫎宸叉湁鐨勯敊璇牱寮�
                            $('.' + this.settings.errorClass, this.currentForm).removeClass(this.settings.errorClass);
                            for (var a = 0; this.errorList[a]; a++) {
                                var b = this.errorList[a];
                                this.settings.highlight && this.settings.highlight.call(this, b.element, this.settings.errorClass, this.settings.validClass);
                                //this.showLabel(b.element, b.message);
                                //姣忔鍙樉绀轰竴涓猠rror
                                this.containers.empty().text(b.message).show();
                                break;
                            }
                            if (this.errorList.length)
                                this.toShow = this.toShow.add(this.containers);
                            if (this.settings.success)
                                for (a = 0; this.successList[a]; a++)
                                    this.showLabel(this.successList[a]);
                            if (this.settings.unhighlight) {
                                a = 0;
                                for (b = this.validElements(); b[a]; a++)
                                    this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass)
                            }
                            this.toHide = this.toHide.not(this.toShow);
                            this.hideErrors();
                            this.addWrapper(this.toShow).show();
                        },
                        submitHandler: function(form) {
                            var data = {
                                /*sex: '1',*/
                                mobile: $('.reg-tel').val(),
                                userName: $('.reg-tel').val().substr(-4, 4),
                                verifyCode: $('.reg-captcha').val(),
                                password: $('.reg-pwd').val(),
                                nationCode: $('#nationCode span').text()
                            };
                            doReg(data, callbackUrl);
                        }
                    });
                }

                function doReg(data, callbackUrl) {
                    var url = window.location.pathname + (callbackUrl ?
                        '?from=' + callbackUrl :
                        '');
                    console.log(url);
                    $.ajax({
                        type: "POST",
                        url: url,
                        contentType: "application/json",
                        data: JSON.stringify(data),
                        success: function(result) {
                            if (!result.code) {
                                location.href = result.data || "/register/success";
                            } else {
                                $('#messagebox').show().text(result.msg);
                                $('.reg-captcha').addClass('error');
                            };
                        }
                    });
                }
                return {
                    curCount: curCount,
                    init: function(callbackUrl) {
                        // 鍒锋柊闅忔満楠岃瘉鐮�--浜嬩欢缁戝畾
                        $('.change-img, .vrfimg').on('click', refreshVerifyCode);
                        //鑾峰彇鐭俊楠岃瘉鐮�
                        $('#getCaptcha').on('click', function() {
                            //濡傛灉姝ｅ湪鍙戦€佺煭淇¤繑鍥�
                            if (isSending())
                                return;

                            //楠岃瘉鎵嬫満鍙蜂互鍙婇獙璇佺爜
                            if ($("#fastReg").validate().element('#verifycode')) {
                                if ($("#fastReg").validate().element('#username')) {
                                    sendVerifyCode($('.reg-tel').val(), $("#verifycode").val(), $('#nationCode span').text());
                                };
                            } else {
                                return false;
                            };
                        });
                        fastRegValidate(callbackUrl);
                    }
                };
            }();

            // 娣诲姞浜嗗瘑鐮佹樉绀洪殣钘忕殑寮€鍏�
            $('#myonoffswitch').on('click', function(event) {
                var status = $(this).attr('checked');
                if (status != 'checked') {
                    $('.reg-pwd').prop('type', 'password').focus();
                } else {
                    $('.reg-pwd').prop('type', 'text').focus();
                };
            });
            $('#lawterms').on('click', function(event) {
                var lawtermstatus = $(this).attr('checked');
                if (lawtermstatus != 'checked') {
                    alert("璇烽槄璇诲苟鍚屾剰鏈０鏄�");
                    $('.submit-btn').attr('disabled', 'disabled');
                } else {
                    $('.submit-btn').removeAttr('disabled');
                };
            });
            var href = $('.go-login').attr('href');
            urlParams.from ?
                $('.go-login').attr('href', href + '?from=' + urlParams.from) :
                null;
            fastReg.init(urlParams.from || '');
        })