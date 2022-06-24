console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html" 
 , "texte" : "File generator/src/main/java/org/apache/kafka/message/MessageGenerator.java 102 rule violations " 
 , "fic2"  : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.message.MessageGenerator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.message.MessageGenerator" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "List<TypeClassGenerator>"
 , "c2" : "createTypeClassGenerators(String;List<String>)"
 , "c3" : "6"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "List<MessageClassGenerator>"
 , "c2" : "createMessageClassGenerators(String;List<String>)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "processDirectories(String;String;String;List<String>;List<String>)"
 , "c3" : "7"
 , "c4" : "19"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "capitalizeFirst(String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "lowerCaseFirst(String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "firstIsCapitalized(String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toSnakeCase(String)"
 , "c3" : "5"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "stripSuffix(String;String)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "sizeOfUnsignedVarint(int)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "1"
 , "c4" : "8"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.png" 

 , "ligneplantuml" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "13"
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
 , "c4" : "70"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
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
   "c1" : "00028"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00028] The class MessageGenerator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#158"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00158] For method createTypeClassGenerators arguments String  packageName|List&lt;String &gt;  types"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.message.MessageGenerator.createTypeClassGenerators@POLYN206390 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.message.MessageGenerator.createTypeClassGenerators@POLYN206390 the MagicNumber/String  'ApiMessageTypeGenerator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.message.MessageGenerator.createTypeClassGenerators@POLYN206390 the MagicNumber/String  'MetadataRecordTypeGenerator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.message.MessageGenerator.createTypeClassGenerators@POLYN206390 the MagicNumber/String  'MetadataJsonConvertersGenerator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.message.MessageGenerator.createTypeClassGenerators@POLYN206390 the MagicNumber/String  'Unknown type class generator type '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.message.MessageGenerator.createTypeClassGenerators@POLYN206390 the MagicNumber/String  ''' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#180"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00180] For method createMessageClassGenerators arguments String  packageName|List&lt;String &gt;  types"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.message.MessageGenerator.createMessageClassGenerators@POLYN207522 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.message.MessageGenerator.createMessageClassGenerators@POLYN207522 the MagicNumber/String  'MessageDataGenerator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.message.MessageGenerator.createMessageClassGenerators@POLYN207522 the MagicNumber/String  'JsonConverterGenerator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.message.MessageGenerator.createMessageClassGenerators@POLYN207522 the MagicNumber/String  'Unknown message class generator type '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.message.MessageGenerator.createMessageClassGenerators@POLYN207522 the MagicNumber/String  ''' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#199"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00199] For method processDirectories arguments String  packageName|String  outputDir|String  inputDir|List&lt;String &gt;  typeClassGeneratorTypes|List&lt;String &gt;  messageClassGeneratorTypes"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#199"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00199] For method processDirectories list of called methods Object monObjet|java.util.List&lt;org.apache.kafka.message.TypeClassGenerator&gt; createTypeClassGeneratorsN208900"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00214] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00216] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00218] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00219] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00221] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00222] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00228] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00219] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00221] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00222] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00235] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00236] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00243] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.message.MessageGenerator.processDirectories@POLYN208465 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00229"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.message.MessageGenerator.processDirectories@POLYN208465 the MagicNumber/String  'Exception while processing ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.message.MessageGenerator.processDirectories@POLYN208465 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.message.MessageGenerator.processDirectories@POLYN208465 the MagicNumber/String  'MessageGenerator: processed %d Kafka message JSON files(s).%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#254"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00254] For method capitalizeFirst arguments String  string"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#254"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00254] The argument string is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.message.MessageGenerator.capitalizeFirst@POLYN211787 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.message.MessageGenerator.capitalizeFirst@POLYN211787 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.message.MessageGenerator.capitalizeFirst@POLYN211787 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#262"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00262] For method lowerCaseFirst arguments String  string"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#262"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00262] The argument string is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.message.MessageGenerator.lowerCaseFirst@POLYN212175 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.message.MessageGenerator.lowerCaseFirst@POLYN212175 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.message.MessageGenerator.lowerCaseFirst@POLYN212175 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00270"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#270"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00270] For method firstIsCapitalized arguments String  string"
}} 
,
{ "ligne" : {
   "c1" : "00270"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#270"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00270] The argument string is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.message.MessageGenerator.firstIsCapitalized@POLYN212563 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.message.MessageGenerator.firstIsCapitalized@POLYN212563 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#277"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00277] For method toSnakeCase arguments String  string"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#277"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00277] The argument string is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.message.MessageGenerator.toSnakeCase@POLYN212858 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.message.MessageGenerator.toSnakeCase@POLYN212858 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00284] In method org.apache.kafka.message.MessageGenerator.toSnakeCase@POLYN212858 the MagicNumber/String  '_' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.message.MessageGenerator.toSnakeCase@POLYN212858 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.message.MessageGenerator.toSnakeCase@POLYN212858 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#296"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00296] For method stripSuffix arguments String  str|String  suffix"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#296"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00296] The argument str is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#296"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00296] The argument suffix is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.message.MessageGenerator.stripSuffix@POLYN213932 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.message.MessageGenerator.stripSuffix@POLYN213932 the MagicNumber/String  'String ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.message.MessageGenerator.stripSuffix@POLYN213932 the MagicNumber/String  ' does not end with the ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.message.MessageGenerator.stripSuffix@POLYN213932 the MagicNumber/String  'expected suffix ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00306"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#306"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00306] For method sizeOfUnsignedVarint arguments int  value"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00307] In method org.apache.kafka.message.MessageGenerator.sizeOfUnsignedVarint@POLYN214536 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00308] In method org.apache.kafka.message.MessageGenerator.sizeOfUnsignedVarint@POLYN214536 the MagicNumber/String  0xffffff80 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00308] In method org.apache.kafka.message.MessageGenerator.sizeOfUnsignedVarint@POLYN214536 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00309"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method org.apache.kafka.message.MessageGenerator.sizeOfUnsignedVarint@POLYN214536 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00310"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00310] In method org.apache.kafka.message.MessageGenerator.sizeOfUnsignedVarint@POLYN214536 the MagicNumber/String  7 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#315"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00315] For method main arguments String[]  args"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  'message-generator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00319"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00319] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  'The Kafka message generator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00320"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  '--package' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00320"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  '-p' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00322"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00322] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00323"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00323] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  'PACKAGE' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  'The java package to use in generated files.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00325"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  '--output' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00325"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  '-o' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00328"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#328"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00328] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  'OUTPUT' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00329"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00329] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  'The output directory to create.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00330"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00330] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  '--input' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00330"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00330] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  '-i' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00332"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#332"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00332] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00333] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  'INPUT' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00334"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#334"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00334] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  'The input directory to use.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00335"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#335"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00335] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  '--typeclass-generators' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00335"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#335"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00335] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  '-t' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  '+' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00338"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00338] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  'TYPECLASS_GENERATORS' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00339"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00339] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  'The type class generators to use, if any.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00340] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  '--message-class-generators' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00340] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  '-m' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  '+' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00343] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  'MESSAGE_CLASS_GENERATORS' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  'The message class generators to use.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  'package' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  'output' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00347"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  'input' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00347"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  'typeclass_generators' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00348"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method org.apache.kafka.message.MessageGenerator.main@POLYN214932 the MagicNumber/String  'message_class_generators' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#315"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00315] Public method main is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
