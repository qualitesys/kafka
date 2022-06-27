console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html" 
 , "texte" : "File generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java 42 rule violations " 
 , "fic2"  : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "TypeClassGenerator"
 , "c2" : "org.apache.kafka.message.MetadataJsonConvertersGenerator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.message.MetadataJsonConvertersGenerator" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "MetadataJsonConvertersGenerator"
 , "c2" : "MetadataJsonConvertersGenerator(String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "outputName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "registerMessageType(MessageSpec)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "generateAndWrite(BufferedWriter)"
 , "c3" : "1"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "generateWriteJson()"
 , "c3" : "2"
 , "c4" : "20"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "generateReadJson()"
 , "c3" : "2"
 , "c4" : "20"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.png" 

 , "ligneplantuml" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.svg" }

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
 , "c4" : "5"
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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
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
 , "c4" : "27"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00010"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class MetadataJsonConvertersGenerator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method registerMessageType arguments MessageSpec  spec"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00027] For method registerMessageType list of called methods Object monObjet|java.util.Optional&lt;Short&gt; spec_apiKeyN174798"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument spec is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.registerMessageType@POLYN174606 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.registerMessageType@POLYN174606 the MagicNumber/String  'Duplicate metadata record entry for type ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.registerMessageType@POLYN174606 the MagicNumber/String  '. Original claimant: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.registerMessageType@POLYN174606 the MagicNumber/String  '. New ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.registerMessageType@POLYN174606 the MagicNumber/String  'claimant: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method generateAndWrite arguments BufferedWriter  writer"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateAndWrite@POLYN175323 the MagicNumber/String  'public class MetadataJsonConverters {%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateAndWrite@POLYN175323 the MagicNumber/String  '%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateAndWrite@POLYN175323 the MagicNumber/String  '%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateAndWrite@POLYN175323 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00055] For method generateWriteJson list of called methods Object monObjet|String MessageGenerator_capitalizeFirstN176714"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00064] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateWriteJson@POLYN176096 the MagicNumber/String  'public static JsonNode writeJson(ApiMessage apiMessage, short apiVersion) {%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateWriteJson@POLYN176096 the MagicNumber/String  'switch (apiMessage.apiKey()) {%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateWriteJson@POLYN176096 the MagicNumber/String  'case %d:%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateWriteJson@POLYN176096 the MagicNumber/String  'return %sJsonConverter.write((%s) apiMessage, apiVersion);%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateWriteJson@POLYN176096 the MagicNumber/String  'default:%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateWriteJson@POLYN176096 the MagicNumber/String  'throw new UnsupportedVersionException(\'Unknown metadata id \'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateWriteJson@POLYN176096 the MagicNumber/String  ' + apiMessage.apiKey());%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateWriteJson@POLYN176096 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateWriteJson@POLYN176096 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00082] For method generateReadJson list of called methods Object monObjet|String MessageGenerator_capitalizeFirstN178378"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00091] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateReadJson@POLYN177760 the MagicNumber/String  'public static ApiMessage readJson(JsonNode json, short apiKey, short apiVersion) {%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateReadJson@POLYN177760 the MagicNumber/String  'switch (apiKey) {%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateReadJson@POLYN177760 the MagicNumber/String  'case %d:%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateReadJson@POLYN177760 the MagicNumber/String  'return %sJsonConverter.read(json, apiVersion);%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateReadJson@POLYN177760 the MagicNumber/String  'default:%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateReadJson@POLYN177760 the MagicNumber/String  'throw new UnsupportedVersionException(\'Unknown metadata id \'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateReadJson@POLYN177760 the MagicNumber/String  ' + apiKey);%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateReadJson@POLYN177760 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.message.MetadataJsonConvertersGenerator.generateReadJson@POLYN177760 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.message.MetadataJsonConvertersGenerator.registerMessageType@POLYN174606"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#31"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00031] In the recursive method org.apache.kafka.message.MetadataJsonConvertersGenerator.registerMessageType@POLYN174606 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#32"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00032] In the recursive method org.apache.kafka.message.MetadataJsonConvertersGenerator.registerMessageType@POLYN174606 the MagicNumber/String 'Duplicate metadata record entry for type ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#33"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00033] In the recursive method org.apache.kafka.message.MetadataJsonConvertersGenerator.registerMessageType@POLYN174606 the MagicNumber/String '. New ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#33"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00033] In the recursive method org.apache.kafka.message.MetadataJsonConvertersGenerator.registerMessageType@POLYN174606 the MagicNumber/String '. Original claimant: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MetadataJsonConvertersGenerator.java.html#34"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00034] In the recursive method org.apache.kafka.message.MetadataJsonConvertersGenerator.registerMessageType@POLYN174606 the MagicNumber/String 'claimant: ' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
