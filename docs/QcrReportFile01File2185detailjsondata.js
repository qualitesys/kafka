console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java 8 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.trogdor.common.JsonUtil"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.common.JsonUtil" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#45"
 , "c1" : "String"
 , "c2" : "toJsonString(Object)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#53"
 , "c1" : "String"
 , "c2" : "toPrettyJsonString(Object)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#68"
 , "c1" : "boolean"
 , "c2" : "openBraceComesFirst(String)"
 , "c3" : "3"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
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
 , "c1" : "00045"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method toJsonString arguments Object  object"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method toPrettyJsonString arguments Object  object"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method openBraceComesFirst arguments String  input"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00068] For method openBraceComesFirst list of called methods Object monObjet|char input_charAtN166103"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#68"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00068] The argument input is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.trogdor.common.JsonUtil.openBraceComesFirst@POLYN165823 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.trogdor.common.JsonUtil.openBraceComesFirst@POLYN165823 the MagicNumber/String  '{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.trogdor.common.JsonUtil.openBraceComesFirst@POLYN165823 the MagicNumber/String  false should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
