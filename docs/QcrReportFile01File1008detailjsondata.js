console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonDeserializer.java.html" 
 , "texte" : "File connect/json/src/main/java/org/apache/kafka/connect/json/JsonDeserializer.java 9 rule violations " 
 , "fic2"  : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonDeserializer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Deserializer<JsonNode>"
 , "c2" : "org.apache.kafka.connect.json.JsonDeserializer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.json.JsonDeserializer" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "JsonDeserializer"
 , "c2" : "JsonDeserializer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "JsonDeserializer"
 , "c2" : "JsonDeserializer(Set<DeserializationFeature>;JsonNodeFactory)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "JsonNode"
 , "c2" : "deserialize(String;byte[])"
 , "c3" : "2"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonDeserializer.java.png" 

 , "ligneplantuml" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonDeserializer.java.svg" }

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
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
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
 , "c4" : "3"
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
   "c1" : "00014"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonDeserializer.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class JsonDeserializer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonDeserializer.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method org.apache.kafka.connect.json.JsonDeserializer.JsonDeserializer@POLYN167621 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonDeserializer.java.html#24"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00024] The argument deserializationFeatures is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonDeserializer.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method deserialize arguments String  topic|byte[]  bytes"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonDeserializer.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.connect.json.JsonDeserializer.deserialize@POLYN168222 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonDeserializer.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.connect.json.JsonDeserializer.deserialize@POLYN168222 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonDeserializer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.json.JsonDeserializer.deserialize@POLYN168222"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonDeserializer.java.html#33"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00033] In the recursive method org.apache.kafka.connect.json.JsonDeserializer.deserialize@POLYN168222 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonDeserializer.java.html#34"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00034] In the recursive method org.apache.kafka.connect.json.JsonDeserializer.deserialize@POLYN168222 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
