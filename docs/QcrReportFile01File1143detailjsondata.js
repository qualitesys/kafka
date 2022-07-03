console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/entities/ConfigInfos.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/entities/ConfigInfos.java 11 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/entities/ConfigInfos.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.runtime.rest.entities.ConfigInfos"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.rest.entities.ConfigInfos" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ConfigInfos"
 , "c2" : "ConfigInfos(String;int;List<String>;List<ConfigInfo>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<String>"
 , "c2" : "groups()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "errorCount()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<ConfigInfo>"
 , "c2" : "values()"
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
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/entities/ConfigInfos.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/entities/ConfigInfos.java.svg" }

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
 , "c4" : "8"
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
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/entities/ConfigInfos.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class ConfigInfos contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/entities/ConfigInfos.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/entities/ConfigInfos.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00058] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/entities/ConfigInfos.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.connect.runtime.rest.entities.ConfigInfos.equals@POLYN172687 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/entities/ConfigInfos.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.connect.runtime.rest.entities.ConfigInfos.equals@POLYN172687 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/entities/ConfigInfos.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.connect.runtime.rest.entities.ConfigInfos.equals@POLYN172687 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/entities/ConfigInfos.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.connect.runtime.rest.entities.ConfigInfos.toString@POLYN173688 the MagicNumber/String  '[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/entities/ConfigInfos.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.connect.runtime.rest.entities.ConfigInfos.toString@POLYN173688 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/entities/ConfigInfos.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.connect.runtime.rest.entities.ConfigInfos.toString@POLYN173688 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/entities/ConfigInfos.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.connect.runtime.rest.entities.ConfigInfos.toString@POLYN173688 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/entities/ConfigInfos.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.connect.runtime.rest.entities.ConfigInfos.toString@POLYN173688 the MagicNumber/String  ']' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
