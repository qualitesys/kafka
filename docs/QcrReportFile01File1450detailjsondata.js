console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html" 
 , "texte" : "File server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java 9 rule violations " 
 , "fic2"  : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.server.common.ApiMessageAndVersion"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.common.ApiMessageAndVersion" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ApiMessageAndVersion"
 , "c2" : "ApiMessageAndVersion(ApiMessage;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ApiMessage"
 , "c2" : "message()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "short"
 , "c2" : "version()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.png" 

 , "ligneplantuml" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.svg" }

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
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00010"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class ApiMessageAndVersion contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00030] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.server.common.ApiMessageAndVersion.equals@POLYN159146 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.server.common.ApiMessageAndVersion.equals@POLYN159146 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.server.common.ApiMessageAndVersion.equals@POLYN159146 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.server.common.ApiMessageAndVersion.toString@POLYN159882 the MagicNumber/String  'ApiMessageAndVersion(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.server.common.ApiMessageAndVersion.toString@POLYN159882 the MagicNumber/String  ' at version ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/ApiMessageAndVersion.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.server.common.ApiMessageAndVersion.toString@POLYN159882 the MagicNumber/String  ')' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
