console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/IntegerSerializer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/serialization/IntegerSerializer.java 7 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/IntegerSerializer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Serializer<Integer>"
 , "c2" : "org.apache.kafka.common.serialization.IntegerSerializer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.serialization.IntegerSerializer" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "serialize(String;Integer)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/IntegerSerializer.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/IntegerSerializer.java.svg" }

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
 , "c4" : "5"
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
   "c1" : "00004"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/IntegerSerializer.java.html#4"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00004] The class IntegerSerializer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00005"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/IntegerSerializer.java.html#5"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00005] For method serialize arguments String  topic|Integer  data"
}} 
,
{ "ligne" : {
   "c1" : "00006"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/IntegerSerializer.java.html#6"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00006] In method org.apache.kafka.common.serialization.IntegerSerializer.serialize@POLYN159585 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00007"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/IntegerSerializer.java.html#7"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00007] In method org.apache.kafka.common.serialization.IntegerSerializer.serialize@POLYN159585 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00010"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/IntegerSerializer.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00010] In method org.apache.kafka.common.serialization.IntegerSerializer.serialize@POLYN159585 the MagicNumber/String  24 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00011"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/IntegerSerializer.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00011] In method org.apache.kafka.common.serialization.IntegerSerializer.serialize@POLYN159585 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/IntegerSerializer.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00012] In method org.apache.kafka.common.serialization.IntegerSerializer.serialize@POLYN159585 the MagicNumber/String  8 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
