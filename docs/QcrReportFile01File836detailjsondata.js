console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java 12 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "LoginModule"
 , "c2" : "org.apache.kafka.common.security.scram.ScramLoginModule"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.scram.ScramLoginModule" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java.html#41"
 , "c1" : "void"
 , "c2" : "initialize(Subject;CallbackHandler;Map&lt;String,?&gt;;Map&lt;String,?&gt;)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java.html#57"
 , "c1" : "boolean"
 , "c2" : "login()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java.html#62"
 , "c1" : "boolean"
 , "c2" : "logout()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java.html#67"
 , "c1" : "boolean"
 , "c2" : "commit()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java.html#72"
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
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java.svg" }

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
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method initialize arguments Subject  subject|CallbackHandler  callbackHandler|Map&lt;String ,? &gt;  sharedState|Map&lt;String ,? &gt;  options"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00041] For method initialize list of called methods Object monObjet|java.lang.String String_valueOfN158854"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java.html#41"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00041] The argument subject is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java.html#41"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00041] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.common.security.scram.ScramLoginModule.initialize@POLYN158094 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.common.security.scram.ScramLoginModule.initialize@POLYN158094 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.common.security.scram.ScramLoginModule.initialize@POLYN158094 the MagicNumber/String  'true' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.common.security.scram.ScramLoginModule.initialize@POLYN158094 the MagicNumber/String  'true' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.common.security.scram.ScramLoginModule.login@POLYN159339 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.security.scram.ScramLoginModule.logout@POLYN159441 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.common.security.scram.ScramLoginModule.commit@POLYN159543 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.common.security.scram.ScramLoginModule.abort@POLYN159645 the MagicNumber/String  false should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/ScramLoginModule.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
