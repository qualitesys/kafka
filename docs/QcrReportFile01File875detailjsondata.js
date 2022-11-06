console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringDeserializer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/serialization/StringDeserializer.java 11 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringDeserializer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Deserializer<String>"
 , "c2" : "org.apache.kafka.common.serialization.StringDeserializer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.serialization.StringDeserializer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00015"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/serialization/StringDeserializer.java.html#15"
 , "c1" : "void"
 , "c2" : "configure(Map<String,?>;boolean)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00025"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/serialization/StringDeserializer.java.html#25"
 , "c1" : "String"
 , "c2" : "deserialize(String;byte[])"
 , "c3" : "3"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringDeserializer.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringDeserializer.java.svg" }

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
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00011"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringDeserializer.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class StringDeserializer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringDeserializer.java.html#15"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00015] For method configure arguments Map&lt;String ,? &gt;  configs|boolean  isKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringDeserializer.java.html#15"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00015] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringDeserializer.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method org.apache.kafka.common.serialization.StringDeserializer.configure@POLYN145991 the MagicNumber/String  'key.deserializer.encoding' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringDeserializer.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method org.apache.kafka.common.serialization.StringDeserializer.configure@POLYN145991 the MagicNumber/String  'value.deserializer.encoding' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringDeserializer.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00018] In method org.apache.kafka.common.serialization.StringDeserializer.configure@POLYN145991 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringDeserializer.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method org.apache.kafka.common.serialization.StringDeserializer.configure@POLYN145991 the MagicNumber/String  'deserializer.encoding' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringDeserializer.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method deserialize arguments String  topic|byte[]  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringDeserializer.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.common.serialization.StringDeserializer.deserialize@POLYN146683 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringDeserializer.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.common.serialization.StringDeserializer.deserialize@POLYN146683 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringDeserializer.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.common.serialization.StringDeserializer.deserialize@POLYN146683 the MagicNumber/String  'Error when deserializing byte[] to string due to unsupported encoding ' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringDeserializer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
