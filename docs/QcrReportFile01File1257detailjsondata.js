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
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.message.MessageGenerator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.message.MessageGenerator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00177"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#177"
 , "c1" : "List&lt;TypeClassGenerator&gt;"
 , "c2" : "createTypeClassGenerators(String;List&lt;String&gt;)"
 , "c3" : "6"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00199"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#199"
 , "c1" : "List&lt;MessageClassGenerator&gt;"
 , "c2" : "createMessageClassGenerators(String;List&lt;String&gt;)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00218"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#218"
 , "c1" : "void"
 , "c2" : "processDirectories(String;String;String;List&lt;String&gt;;List&lt;String&gt;)"
 , "c3" : "7"
 , "c4" : "19"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00273"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#273"
 , "c1" : "String"
 , "c2" : "capitalizeFirst(String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00281"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#281"
 , "c1" : "String"
 , "c2" : "lowerCaseFirst(String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00289"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#289"
 , "c1" : "boolean"
 , "c2" : "firstIsCapitalized(String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00296"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#296"
 , "c1" : "String"
 , "c2" : "toSnakeCase(String)"
 , "c3" : "5"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00315"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#315"
 , "c1" : "String"
 , "c2" : "stripSuffix(String;String)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00327"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#327"
 , "c1" : "int"
 , "c2" : "sizeOfUnsignedVarint(int)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00336"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#336"
 , "c1" : "void"
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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "13"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "70"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method createTypeClassGenerators arguments String  packageName|List&lt;String &gt;  types"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.message.MessageGenerator.createTypeClassGenerators@POLYN193876 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.message.MessageGenerator.createTypeClassGenerators@POLYN193876 the MagicNumber/String  'ApiMessageTypeGenerator' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.message.MessageGenerator.createTypeClassGenerators@POLYN193876 the MagicNumber/String  'MetadataRecordTypeGenerator' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.message.MessageGenerator.createTypeClassGenerators@POLYN193876 the MagicNumber/String  'MetadataJsonConvertersGenerator' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.message.MessageGenerator.createTypeClassGenerators@POLYN193876 the MagicNumber/String  'Unknown type class generator type '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.message.MessageGenerator.createTypeClassGenerators@POLYN193876 the MagicNumber/String  ''' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#199"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00199] For method createMessageClassGenerators arguments String  packageName|List&lt;String &gt;  types"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.message.MessageGenerator.createMessageClassGenerators@POLYN195008 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.message.MessageGenerator.createMessageClassGenerators@POLYN195008 the MagicNumber/String  'MessageDataGenerator' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.message.MessageGenerator.createMessageClassGenerators@POLYN195008 the MagicNumber/String  'JsonConverterGenerator' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.message.MessageGenerator.createMessageClassGenerators@POLYN195008 the MagicNumber/String  'Unknown message class generator type '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.message.MessageGenerator.createMessageClassGenerators@POLYN195008 the MagicNumber/String  ''' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#218"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00218] For method processDirectories arguments String  packageName|String  outputDir|String  inputDir|List&lt;String &gt;  typeClassGeneratorTypes|List&lt;String &gt;  messageClassGeneratorTypes"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#218"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00218] For method processDirectories list of called methods Object monObjet|java.util.List createTypeClassGeneratorsN196386"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00233] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00235] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00237] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00238] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00240"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00240] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00241] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00247] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00238] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00240"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00240] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00241] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00254"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00254] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00255] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00262] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.message.MessageGenerator.processDirectories@POLYN195951 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.message.MessageGenerator.processDirectories@POLYN195951 the MagicNumber/String  'Exception while processing ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00263"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.message.MessageGenerator.processDirectories@POLYN195951 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00270"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method org.apache.kafka.message.MessageGenerator.processDirectories@POLYN195951 the MagicNumber/String  'MessageGenerator: processed %d Kafka message JSON files(s).%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00273"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#273"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00273] For method capitalizeFirst arguments String  string"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00273"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#273"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00273] The argument string is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00277"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.message.MessageGenerator.capitalizeFirst@POLYN199283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00277"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.message.MessageGenerator.capitalizeFirst@POLYN199283 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.message.MessageGenerator.capitalizeFirst@POLYN199283 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#281"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00281] For method lowerCaseFirst arguments String  string"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#281"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00281] The argument string is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method org.apache.kafka.message.MessageGenerator.lowerCaseFirst@POLYN199671 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method org.apache.kafka.message.MessageGenerator.lowerCaseFirst@POLYN199671 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00286"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.message.MessageGenerator.lowerCaseFirst@POLYN199671 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00289"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#289"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00289] For method firstIsCapitalized arguments String  string"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00289"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#289"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00289] The argument string is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.message.MessageGenerator.firstIsCapitalized@POLYN200059 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.message.MessageGenerator.firstIsCapitalized@POLYN200059 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#296"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00296] For method toSnakeCase arguments String  string"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#296"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00296] For method toSnakeCase list of called methods Object monObjet|char string_charAtN200763"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#296"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00296] The argument string is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00298"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.message.MessageGenerator.toSnakeCase@POLYN200354 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.message.MessageGenerator.toSnakeCase@POLYN200354 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.message.MessageGenerator.toSnakeCase@POLYN200354 the MagicNumber/String  '_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.message.MessageGenerator.toSnakeCase@POLYN200354 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00309"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method org.apache.kafka.message.MessageGenerator.toSnakeCase@POLYN200354 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00315"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#315"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00315] For method stripSuffix arguments String  str|String  suffix"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00315"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#315"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00315] The argument str is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00315"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#315"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00315] The argument suffix is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.message.MessageGenerator.stripSuffix@POLYN201428 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00319"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00319] In method org.apache.kafka.message.MessageGenerator.stripSuffix@POLYN201428 the MagicNumber/String  'String ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00319"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00319] In method org.apache.kafka.message.MessageGenerator.stripSuffix@POLYN201428 the MagicNumber/String  ' does not end with the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00320"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.message.MessageGenerator.stripSuffix@POLYN201428 the MagicNumber/String  'expected suffix ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00327"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#327"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00327] For method sizeOfUnsignedVarint arguments int  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00328"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#328"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00328] In method org.apache.kafka.message.MessageGenerator.sizeOfUnsignedVarint@POLYN202032 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00329"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00329] In method org.apache.kafka.message.MessageGenerator.sizeOfUnsignedVarint@POLYN202032 the MagicNumber/String  0xffffff80 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00329"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00329] In method org.apache.kafka.message.MessageGenerator.sizeOfUnsignedVarint@POLYN202032 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00330"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00330] In method org.apache.kafka.message.MessageGenerator.sizeOfUnsignedVarint@POLYN202032 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.message.MessageGenerator.sizeOfUnsignedVarint@POLYN202032 the MagicNumber/String  7 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00336"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#336"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00336] For method main arguments String[]  args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00338"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00338] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  'message-generator' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00339"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00339] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00340"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00340] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  'The Kafka message generator' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  '--package' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  '-p' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00343"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00343] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00344"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  'PACKAGE' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00345"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  'The java package to use in generated files.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00346"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  '--output' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00346"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  '-o' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00348"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00349"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  'OUTPUT' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00350"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#350"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00350] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  'The output directory to create.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  '--input' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  '-i' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00353"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00353] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00354"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  'INPUT' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00355"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00355] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  'The input directory to use.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00356"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00356] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  '--typeclass-generators' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00356"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00356] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  '-t' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00357"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  '+' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00359"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#359"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00359] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  'TYPECLASS_GENERATORS' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00360"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00360] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  'The type class generators to use, if any.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00361"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00361] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  '--message-class-generators' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00361"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00361] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  '-m' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00362"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  '+' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00364"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  'MESSAGE_CLASS_GENERATORS' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00365"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00365] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  'The message class generators to use.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00367"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  'package' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00367"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  'output' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00368"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00368] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  'input' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00368"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00368] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  'typeclass_generators' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00369"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#369"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00369] In method org.apache.kafka.message.MessageGenerator.main@POLYN202428 the MagicNumber/String  'message_class_generators' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00336"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.html#336"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00336] Public method main is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/generator/src/main/java/org/apache/kafka/message/MessageGenerator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
