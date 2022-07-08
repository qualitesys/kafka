console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html" 
 , "texte" : "File tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java 173 rule violations " 
 , "fic2"  : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.tools.ProducerPerformance"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.tools.ProducerPerformance" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start(String[])"
 , "c3" : "13"
 , "c4" : "52"
}} 
,
{ "ligne" : {
   "c1" : "KafkaProducer<byte[],byte[]>"
 , "c2" : "createKafkaProducer(Properties)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "generateRandomPayload(Integer;List<byte[]>;byte[];Random)"
 , "c3" : "6"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Properties"
 , "c2" : "readProps(List<String>;String;String;boolean)"
 , "c3" : "7"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "List<byte[]>"
 , "c2" : "readPayloadFile(String;String)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "ArgumentParser"
 , "c2" : "argParser()"
 , "c3" : "1"
 , "c4" : "14"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.png" 

 , "ligneplantuml" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.svg" }

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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "155"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00032] The class ProducerPerformance contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method main arguments String[]  args"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method start arguments String[]  args"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#39"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00039] The argument args is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00100] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  'numRecords' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  'recordSize' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  'throughput' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  'producerConfig' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  'producerConfigFile' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  'payloadFile' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  'transactionalId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  'printMetrics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  'transactionDurationMs' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  'payloadDelimiter' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  '\\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  'payloadDelimiter' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  'Either --producer-props or --producer.config must be specified.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  5000 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN207598 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#147"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00147] For method createKafkaProducer arguments Properties  props"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#151"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00151] For method generateRandomPayload arguments Integer  recordSize|List&lt;byte[] &gt;  payloadByteList|byte[]  payload|Random  random"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#151"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00151] The argument payloadByteList is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#152"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00152] The argument random is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.tools.ProducerPerformance.generateRandomPayload@POLYN213355 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.tools.ProducerPerformance.generateRandomPayload@POLYN213355 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.tools.ProducerPerformance.generateRandomPayload@POLYN213355 the MagicNumber/String  26 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.tools.ProducerPerformance.generateRandomPayload@POLYN213355 the MagicNumber/String  65 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.tools.ProducerPerformance.generateRandomPayload@POLYN213355 the MagicNumber/String  'no payload File Path or record Size provided' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00164] For method readProps arguments List&lt;String &gt;  producerProps|String  producerConfig|String  transactionalId|boolean  transactionsEnabled"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00172] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN214316 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN214316 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN214316 the MagicNumber/String  '=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN214316 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN214316 the MagicNumber/String  'Invalid property: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN214316 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN214316 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN214316 the MagicNumber/String  'org.apache.kafka.common.serialization.ByteArraySerializer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN214316 the MagicNumber/String  'org.apache.kafka.common.serialization.ByteArraySerializer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN214316 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN214316 the MagicNumber/String  'perf-producer-client' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#187"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00187] For method readPayloadFile arguments String  payloadFilePath|String  payloadDelimiter"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.tools.ProducerPerformance.readPayloadFile@POLYN215939 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.tools.ProducerPerformance.readPayloadFile@POLYN215939 the MagicNumber/String  'Reading payloads from: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.tools.ProducerPerformance.readPayloadFile@POLYN215939 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.tools.ProducerPerformance.readPayloadFile@POLYN215939 the MagicNumber/String  'File does not exist or empty file provided.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.tools.ProducerPerformance.readPayloadFile@POLYN215939 the MagicNumber/String  'Number of messages read: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'producer-performance' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'This tool is used to verify the producer performance.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'either --record-size or --payload-file must be specified but not both.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  '--topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00223"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'TOPIC' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'produce messages to this topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  '--num-records' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00228] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'NUM-RECORDS' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'numRecords' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'number of messages to produce' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00234] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  '--record-size' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'RECORD-SIZE' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'recordSize' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'message size in bytes. Note that you must provide exactly one of --record-size or --payload-file.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00242] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  '--payload-file' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'PAYLOAD-FILE' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'payloadFile' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'file to read the message payloads from. This works only for UTF-8 encoded text files. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'Payloads will be read from this file and a payload will be randomly selected when sending messages. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'Note that you must provide exactly one of --record-size or --payload-file.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  '--payload-delimiter' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'PAYLOAD-DELIMITER' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'payloadDelimiter' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  '\\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'provides delimiter to be used when --payload-file is provided. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'Defaults to new line. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'Note that this parameter will be ignored if --payload-file is not provided.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  '--throughput' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'THROUGHPUT' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00268] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'throttle maximum message throughput to *approximately* THROUGHPUT messages/sec. Set this to -1 to disable throttling.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00270"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  '--producer-props' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  '+' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'PROP-NAME=PROP-VALUE' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00275"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00275] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'producerConfig' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'kafka producer related configuration properties like bootstrap.servers,client.id etc. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'These configs take precedence over those passed via --producer.config.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  '--producer.config' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00281"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00283"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'CONFIG-FILE' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00284] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'producerConfigFile' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'producer config properties file.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  '--print-metrics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'PRINT-METRICS' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'printMetrics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'print out metrics at the end of the test.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  '--transactional-id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'TRANSACTIONAL-ID' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00299"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'transactionalId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'performance-producer-default-transactional-id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'The transactionalId to use if transaction-duration-ms is &amp;gt; 0. Useful when testing the performance of concurrent transactions.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00303"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  '--transaction-duration-ms' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00307] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'TRANSACTION-DURATION' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00308] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'transactionDurationMs' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00309"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00310"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00310] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN217250 the MagicNumber/String  'The max age of each transaction. The commitTransaction will be called after this time has elapsed. Transactions are only enabled if this value is positive.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00316"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00316] The class Stats contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN222120 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00337] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN222120 the MagicNumber/String  500000 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00338"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00338] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN222120 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00339"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00339] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN222120 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00340] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN222120 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN222120 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00342"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#342"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00342] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN222120 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00343] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN222120 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN222120 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN222120 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN222120 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00350"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#350"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00350] For method record arguments int  iter|int  latency|int  bytes|long  time"
}} 
,
{ "ligne" : {
   "c1" : "00359"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#359"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00359] In method org.apache.kafka.tools.ProducerPerformance.Stats.record@POLYN223421 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00370"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#370"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00370] For method nextCompletion arguments long  start|int  bytes|Stats  stats"
}} 
,
{ "ligne" : {
   "c1" : "00378"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00378] In method org.apache.kafka.tools.ProducerPerformance.Stats.printWindow@POLYN224975 the MagicNumber/String  1000.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.tools.ProducerPerformance.Stats.printWindow@POLYN224975 the MagicNumber/String  1000.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.tools.ProducerPerformance.Stats.printWindow@POLYN224975 the MagicNumber/String  1024.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.tools.ProducerPerformance.Stats.printWindow@POLYN224975 the MagicNumber/String  1024.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00380"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00380] In method org.apache.kafka.tools.ProducerPerformance.Stats.printWindow@POLYN224975 the MagicNumber/String  '%d records sent, %.1f records/sec (%.2f MB/sec), %.1f ms avg latency, %.1f ms max latency.%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00390"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00390] In method org.apache.kafka.tools.ProducerPerformance.Stats.newWindow@POLYN225684 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00391"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00391] In method org.apache.kafka.tools.ProducerPerformance.Stats.newWindow@POLYN225684 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00392"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00392] In method org.apache.kafka.tools.ProducerPerformance.Stats.newWindow@POLYN225684 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.tools.ProducerPerformance.Stats.newWindow@POLYN225684 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00398] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN226073 the MagicNumber/String  1000.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00399"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00399] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN226073 the MagicNumber/String  1000.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00399"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00399] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN226073 the MagicNumber/String  1024.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00399"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00399] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN226073 the MagicNumber/String  1024.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#400"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00400] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN226073 the MagicNumber/String  0.5 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#400"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00400] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN226073 the MagicNumber/String  0.95 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#400"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00400] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN226073 the MagicNumber/String  0.99 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#400"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00400] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN226073 the MagicNumber/String  0.999 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00401"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#401"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00401] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN226073 the MagicNumber/String  '%d records sent, %f records/sec (%.2f MB/sec), %.2f ms avg latency, %.2f ms max latency, %d ms 50th, %d ms 95th, %d ms 99th, %d ms 99.9th.%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00407"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00407] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN226073 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00408"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#408"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00408] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN226073 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00409"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#409"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00409] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN226073 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00410"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN226073 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00413"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#413"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00413] For method percentiles arguments int[]  latencies|int  count|double  ...percentiles"
}} 
,
{ "ligne" : {
   "c1" : "00415"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00415] In method org.apache.kafka.tools.ProducerPerformance.Stats.percentiles@POLYN227233 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00417"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#417"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00417] In method org.apache.kafka.tools.ProducerPerformance.Stats.percentiles@POLYN227233 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#425"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00425] The class PerfCallback contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#438"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00438] For method onCompletion arguments RecordMetadata  metadata|Exception  exception"
}} 
,
{ "ligne" : {
   "c1" : "00442"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#442"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00442] In method org.apache.kafka.tools.ProducerPerformance.PerfCallback.onCompletion@POLYN228799 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
