console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/server-common/src/main/java/org/apache/kafka/server/common/MetadataVersionValidator.java.html" 
 , "texte" : "File server-common/src/main/java/org/apache/kafka/server/common/MetadataVersionValidator.java 6 rule violations " 
 , "fic2"  : "./qc/server-common/src/main/java/org/apache/kafka/server/common/MetadataVersionValidator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Validator"
 , "c2" : "org.apache.kafka.server.common.MetadataVersionValidator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.common.MetadataVersionValidator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00012"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/common/MetadataVersionValidator.java.html#12"
 , "c1" : "void"
 , "c2" : "ensureValid(String;Object)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00021"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/common/MetadataVersionValidator.java.html#21"
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
   {"ligne" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/MetadataVersionValidator.java.png" 

 , "ligneplantuml" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/MetadataVersionValidator.java.svg" }

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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00009"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/MetadataVersionValidator.java.html#9"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00009] The class MetadataVersionValidator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00012"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/MetadataVersionValidator.java.html#12"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00012] For method ensureValid arguments String  name|Object  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00012"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/MetadataVersionValidator.java.html#12"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00012] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/MetadataVersionValidator.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method org.apache.kafka.server.common.MetadataVersionValidator.toString@POLYN143954 the MagicNumber/String  '[' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/MetadataVersionValidator.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method org.apache.kafka.server.common.MetadataVersionValidator.toString@POLYN143954 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/MetadataVersionValidator.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method org.apache.kafka.server.common.MetadataVersionValidator.toString@POLYN143954 the MagicNumber/String  ']' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/MetadataVersionValidator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
