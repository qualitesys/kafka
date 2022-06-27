console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java 16 rule violations " 
 , "fic2"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Converter"
 , "c2" : "org.apache.kafka.connect.storage.StringConverter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.storage.StringConverter" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "StringConverter"
 , "c2" : "StringConverter()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "ConfigDef"
 , "c2" : "config()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configure(Map<String,?>;boolean)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "fromConnectData(String;Schema;Object)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "SchemaAndValue"
 , "c2" : "toConnectData(String;byte[])"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "fromConnectHeader(String;String;Schema;Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SchemaAndValue"
 , "c2" : "toConnectHeader(String;String;byte[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java.png" 

 , "ligneplantuml" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
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
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class StringConverter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00030] For method configure list of called methods Object monObjet|String conf_encodingN175964|org.apache.kafka.connect.storage.ConverterType conf_typeN176509"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.connect.storage.StringConverter.configure@POLYN175747 the MagicNumber/String  'serializer.encoding' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.connect.storage.StringConverter.configure@POLYN175747 the MagicNumber/String  'deserializer.encoding' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method configure arguments Map&lt;String ,? &gt;  configs|boolean  isKey"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method fromConnectData arguments String  topic|Schema  schema|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.connect.storage.StringConverter.fromConnectData@POLYN177335 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.connect.storage.StringConverter.fromConnectData@POLYN177335 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.connect.storage.StringConverter.fromConnectData@POLYN177335 the MagicNumber/String  'Failed to serialize to a string: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method toConnectData arguments String  topic|byte[]  value"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.connect.storage.StringConverter.toConnectData@POLYN177821 the MagicNumber/String  'Failed to deserialize string: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method fromConnectHeader arguments String  topic|String  headerKey|Schema  schema|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method toConnectHeader arguments String  topic|String  headerKey|byte[]  value"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java.html#80"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00080] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/StringConverter.java.html#80"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00080] Void method close is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
