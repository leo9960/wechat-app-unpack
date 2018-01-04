function ana(raw){
    var str="";
    for(var i in raw){
        if(i=="tag"){
            if(raw[i]!="virtual"){
                str+="<"+raw[i];
            }
            if(raw["wx:for-items"]!=undefined){
                str+=" wx:for-items=\""+raw["wx:for-items"]+"\"";
            }
            if(raw["wx:key"]!=undefined){
                str+=" wx:key=\""+raw["wx:key"]+"\"";
            }
            if(raw["attr"]!=undefined){
                for(var j in raw["attr"]){
                    str+=" "+j+"=\""+raw["attr"][j]+"\"";
                }
            }
            str+=">";
            if(raw["children"]!=undefined){
                
                for(var k in raw["children"]){
                    if(typeof(raw["children"][k])=="object"){
                        str+=ana(raw["children"][k]);
                    }else{
                        str+=raw["children"][k];
                    }
                }
            }
            if(raw[i]!="virtual"){
                str+="</"+raw[i]+">";
            }
        }
    }
    return str;
}
