console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonSerializer.java.html" 
 , "texte" : "File connect/json/src/main/java/org/apache/kafka/connect/json/JsonSerializer.java 7 rule violations " 
 , "fic2"  : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonSerializer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Serializer<JsonNode>"
 , "c2" : "org.apache.kafka.connect.json.JsonSerializer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.json.JsonSerializer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00019"
 , "c5link" : "././qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonSerializer.java.html#19"
 , "c1" : "JsonSerializer"
 , "c2" : "JsonSerializer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00024"
 , "c5link" : "././qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonSerializer.java.html#24"
 , "c1" : "JsonSerializer"
 , "c2" : "JsonSerializer(Set<SerializationFeature>;JsonNodeFactory)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonSerializer.java.html#33"
 , "c1" : "byte[]"
 , "c2" : "serialize(String;JsonNode)"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonSerializer.java.png" 

 , "ligneplantuml" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonSerializer.java.svg" }

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
 , "c4" : "4"
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
 , "c1" : "00015"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonSerializer.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class JsonSerializer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonSerializer.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method org.apache.kafka.connect.json.JsonSerializer.JsonSerializer@POLYN147958 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonSerializer.java.html#25"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00025] The argument serializationFeatures is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonSerializer.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method serialize arguments String  topic|JsonNode  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonSerializer.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.connect.json.JsonSerializer.serialize@POLYN148565 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonSerializer.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.connect.json.JsonSerializer.serialize@POLYN148565 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonSerializer.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.connect.json.JsonSerializer.serialize@POLYN148565 the MagicNumber/String  'Error serializing JSON message' should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonSerializer.java.svg" }

};
console.log('leListeStr 99 main end');
