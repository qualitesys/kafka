console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html" 
 , "texte" : "File server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java 8 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.server.common.ApiMessageAndVersion"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.common.ApiMessageAndVersion" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#31"
 , "c1" : "ApiMessageAndVersion"
 , "c2" : "ApiMessageAndVersion(ApiMessage;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#36"
 , "c1" : "ApiMessage"
 , "c2" : "message()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#40"
 , "c1" : "short"
 , "c2" : "version()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#45"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#54"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#59"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
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
 , "c1" : "00045"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00047] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.server.common.ApiMessageAndVersion.equals@POLYN151824 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.server.common.ApiMessageAndVersion.equals@POLYN151824 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.server.common.ApiMessageAndVersion.equals@POLYN151824 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.server.common.ApiMessageAndVersion.toString@POLYN152560 the MagicNumber/String  'ApiMessageAndVersion(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.server.common.ApiMessageAndVersion.toString@POLYN152560 the MagicNumber/String  ' at version ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.server.common.ApiMessageAndVersion.toString@POLYN152560 the MagicNumber/String  ')' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
