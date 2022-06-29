console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/ConfigSynonym.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/metadata/ConfigSynonym.java 7 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/ConfigSynonym.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.metadata.ConfigSynonym"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.metadata.ConfigSynonym" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "int"
 , "c2" : "valueToInt(String;int;String)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "ConfigSynonym"
 , "c2" : "ConfigSynonym(String;Function<String,String>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ConfigSynonym"
 , "c2" : "ConfigSynonym(String)"
 , "c3" : "1"
 , "c4" : "1"
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
   "c1" : "Function<String,String>"
 , "c2" : "converter()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/ConfigSynonym.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/ConfigSynonym.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
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
 , "c4" : "2"
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
   "c1" : "00012"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/ConfigSynonym.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class ConfigSynonym contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/ConfigSynonym.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method valueToInt arguments String  input|int  defaultValue|String  what"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/ConfigSynonym.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.metadata.ConfigSynonym.valueToInt@POLYN168222 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/ConfigSynonym.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.metadata.ConfigSynonym.valueToInt@POLYN168222 the MagicNumber/String  '{} failed: unable to parse '{}' as an integer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/ConfigSynonym.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.metadata.ConfigSynonym.valueToInt@POLYN168222"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/ConfigSynonym.java.html#26"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00026] In the recursive method org.apache.kafka.metadata.ConfigSynonym.valueToInt@POLYN168222 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/ConfigSynonym.java.html#34"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00034] In the recursive method org.apache.kafka.metadata.ConfigSynonym.valueToInt@POLYN168222 the MagicNumber/String '{} failed: unable to parse '{}' as an integer.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
