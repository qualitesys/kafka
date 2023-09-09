console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html" 
 , "texte" : "File generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java 32 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "TypeClassGenerator"
 , "c2" : "org.apache.kafka.message.MetadataJsonConvertersGenerator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.message.MetadataJsonConvertersGenerator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00030"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#30"
 , "c1" : "MetadataJsonConvertersGenerator"
 , "c2" : "MetadataJsonConvertersGenerator(String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#37"
 , "c1" : "String"
 , "c2" : "outputName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#42"
 , "c1" : "void"
 , "c2" : "registerMessageType(MessageSpec)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#55"
 , "c1" : "void"
 , "c2" : "generateAndWrite(BufferedWriter)"
 , "c3" : "1"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#70"
 , "c1" : "void"
 , "c2" : "generateWriteJson()"
 , "c3" : "2"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00097"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#97"
 , "c1" : "void"
 , "c2" : "generateReadJson()"
 , "c3" : "2"
 , "c4" : "20"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "27"
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
 , "c1" : "00042"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method registerMessageType arguments MessageSpec  spec"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument spec is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.registerMessageType@POLYN168424 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.registerMessageType@POLYN168424 the MagicNumber/String  'Duplicate metadata record entry for type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.registerMessageType@POLYN168424 the MagicNumber/String  '. Original claimant: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.registerMessageType@POLYN168424 the MagicNumber/String  '. New ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.registerMessageType@POLYN168424 the MagicNumber/String  'claimant: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method generateAndWrite arguments BufferedWriter  writer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateAndWrite@POLYN169145 the MagicNumber/String  'public class MetadataJsonConverters {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateAndWrite@POLYN169145 the MagicNumber/String  '%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateAndWrite@POLYN169145 the MagicNumber/String  '%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateAndWrite@POLYN169145 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00079] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateWriteJson@POLYN169918 the MagicNumber/String  'public static JsonNode writeJson(ApiMessage apiMessage, short apiVersion) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateWriteJson@POLYN169918 the MagicNumber/String  'switch (apiMessage.apiKey()) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateWriteJson@POLYN169918 the MagicNumber/String  'case %d:%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateWriteJson@POLYN169918 the MagicNumber/String  'return %sJsonConverter.write((%s) apiMessage, apiVersion);%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateWriteJson@POLYN169918 the MagicNumber/String  'default:%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateWriteJson@POLYN169918 the MagicNumber/String  'throw new UnsupportedVersionException(\'Unknown metadata id \'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateWriteJson@POLYN169918 the MagicNumber/String  ' + apiMessage.apiKey());%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateWriteJson@POLYN169918 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateWriteJson@POLYN169918 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00106] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateReadJson@POLYN171584 the MagicNumber/String  'public static ApiMessage readJson(JsonNode json, short apiKey, short apiVersion) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateReadJson@POLYN171584 the MagicNumber/String  'switch (apiKey) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateReadJson@POLYN171584 the MagicNumber/String  'case %d:%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateReadJson@POLYN171584 the MagicNumber/String  'return %sJsonConverter.read(json, apiVersion);%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateReadJson@POLYN171584 the MagicNumber/String  'default:%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateReadJson@POLYN171584 the MagicNumber/String  'throw new UnsupportedVersionException(\'Unknown metadata id \'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateReadJson@POLYN171584 the MagicNumber/String  ' + apiKey);%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateReadJson@POLYN171584 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateReadJson@POLYN171584 the MagicNumber/String  '}%n' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
