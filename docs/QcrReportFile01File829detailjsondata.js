console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/PlainLoginModule.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/plain/PlainLoginModule.java 9 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/PlainLoginModule.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "LoginModule"
 , "c2" : "org.apache.kafka.common.security.plain.PlainLoginModule"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.plain.PlainLoginModule" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/plain/PlainLoginModule.java.html#37"
 , "c1" : "void"
 , "c2" : "initialize(Subject;CallbackHandler;Map&lt;String,?&gt;;Map&lt;String,?&gt;)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/plain/PlainLoginModule.java.html#47"
 , "c1" : "boolean"
 , "c2" : "login()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/plain/PlainLoginModule.java.html#52"
 , "c1" : "boolean"
 , "c2" : "logout()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/plain/PlainLoginModule.java.html#57"
 , "c1" : "boolean"
 , "c2" : "commit()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/plain/PlainLoginModule.java.html#62"
 , "c1" : "boolean"
 , "c2" : "abort()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/PlainLoginModule.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/PlainLoginModule.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/PlainLoginModule.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method initialize arguments Subject  subject|CallbackHandler  callbackHandler|Map&lt;String ,? &gt;  sharedState|Map&lt;String ,? &gt;  options"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/PlainLoginModule.java.html#37"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00037] The argument subject is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/PlainLoginModule.java.html#37"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00037] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/PlainLoginModule.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.common.security.plain.PlainLoginModule.initialize@POLYN147252 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/PlainLoginModule.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.common.security.plain.PlainLoginModule.initialize@POLYN147252 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/PlainLoginModule.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.common.security.plain.PlainLoginModule.login@POLYN147998 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/PlainLoginModule.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.common.security.plain.PlainLoginModule.logout@POLYN148100 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/PlainLoginModule.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.common.security.plain.PlainLoginModule.commit@POLYN148202 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/PlainLoginModule.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.security.plain.PlainLoginModule.abort@POLYN148304 the MagicNumber/String  false should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/PlainLoginModule.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
