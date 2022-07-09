console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/BytesApiMessageSerde.java.html" 
 , "texte" : "File server-common/src/main/java/org/apache/kafka/server/common/serialization/BytesApiMessageSerde.java 4 rule violations " 
 , "fic2"  : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/BytesApiMessageSerde.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.server.common.serialization.BytesApiMessageSerde"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.common.serialization.BytesApiMessageSerde" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "serialize(ApiMessageAndVersion)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "ApiMessageAndVersion"
 , "c2" : "deserialize(byte[])"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ApiMessage"
 , "c2" : "apiMessageFor(short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/BytesApiMessageSerde.java.png" 

 , "ligneplantuml" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/BytesApiMessageSerde.java.svg" }

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
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/BytesApiMessageSerde.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class BytesApiMessageSerde contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/BytesApiMessageSerde.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method serialize arguments ApiMessageAndVersion  messageAndVersion"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/BytesApiMessageSerde.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method deserialize arguments byte[]  data"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/BytesApiMessageSerde.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method apiMessageFor arguments short  apiKey"
}} 
]
};
console.log('leListeStr 99 main end');
