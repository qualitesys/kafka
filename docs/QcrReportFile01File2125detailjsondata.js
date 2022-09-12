console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java 8 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.xml" 
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
 , "c5" : "00028"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#28"
 , "c1" : "String"
 , "c2" : "toJsonString(Object)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#36"
 , "c1" : "String"
 , "c2" : "toPrettyJsonString(Object)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#45"
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
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
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
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class JsonUtil contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method toJsonString arguments Object  object"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method toPrettyJsonString arguments Object  object"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method openBraceComesFirst arguments String  input"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#45"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00045] The argument input is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.trogdor.common.JsonUtil.openBraceComesFirst@POLYN155363 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.trogdor.common.JsonUtil.openBraceComesFirst@POLYN155363 the MagicNumber/String  '{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/JsonUtil.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.trogdor.common.JsonUtil.openBraceComesFirst@POLYN155363 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
