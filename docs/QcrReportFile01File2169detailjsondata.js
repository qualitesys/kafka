console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html" 
 , "texte" : "File tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java 170 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.tools.ProducerPerformance"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.tools.ProducerPerformance" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#49"
 , "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#54"
 , "c1" : "void"
 , "c2" : "start(String[])"
 , "c3" : "13"
 , "c4" : "52"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00162"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#162"
 , "c1" : "KafkaProducer&lt;byte[],byte[]&gt;"
 , "c2" : "createKafkaProducer(Properties)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00166"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#166"
 , "c1" : "byte[]"
 , "c2" : "generateRandomPayload(Integer;List&lt;byte[]&gt;;byte[];Random)"
 , "c3" : "6"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00179"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#179"
 , "c1" : "Properties"
 , "c2" : "readProps(List&lt;String&gt;;String;String;boolean)"
 , "c3" : "7"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00202"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#202"
 , "c1" : "List&lt;byte[]&gt;"
 , "c2" : "readPayloadFile(String;String)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00223"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#223"
 , "c1" : "ArgumentParser"
 , "c2" : "argParser()"
 , "c3" : "1"
 , "c4" : "14"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.svg" }

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
 , "c4" : "3"
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
 , "c4" : "155"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method main arguments String[]  args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method start arguments String[]  args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument args is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00115] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  'numRecords' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  'recordSize' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  'throughput' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  'producerConfig' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  'producerConfigFile' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  'payloadFile' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  'transactionalId' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  'printMetrics' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  'transactionDurationMs' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  'payloadDelimiter' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  '\\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  'payloadDelimiter' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  'Either --producer-props or --producer.config must be specified.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  5000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.tools.ProducerPerformance.start@POLYN209112 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#162"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00162] For method createKafkaProducer arguments Properties  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#166"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00166] For method generateRandomPayload arguments Integer  recordSize|List&lt;byte[] &gt;  payloadByteList|byte[]  payload|Random  random"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#166"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00166] The argument payloadByteList is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#167"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00167] The argument random is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.tools.ProducerPerformance.generateRandomPayload@POLYN214869 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.tools.ProducerPerformance.generateRandomPayload@POLYN214869 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.tools.ProducerPerformance.generateRandomPayload@POLYN214869 the MagicNumber/String  26 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.tools.ProducerPerformance.generateRandomPayload@POLYN214869 the MagicNumber/String  65 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.tools.ProducerPerformance.generateRandomPayload@POLYN214869 the MagicNumber/String  'no payload File Path or record Size provided' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#179"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00179] For method readProps arguments List&lt;String &gt;  producerProps|String  producerConfig|String  transactionalId|boolean  transactionsEnabled"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00187] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN215830 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN215830 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN215830 the MagicNumber/String  '=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN215830 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN215830 the MagicNumber/String  'Invalid property: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN215830 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN215830 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN215830 the MagicNumber/String  'org.apache.kafka.common.serialization.ByteArraySerializer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN215830 the MagicNumber/String  'org.apache.kafka.common.serialization.ByteArraySerializer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN215830 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.tools.ProducerPerformance.readProps@POLYN215830 the MagicNumber/String  'perf-producer-client' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#202"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00202] For method readPayloadFile arguments String  payloadFilePath|String  payloadDelimiter"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.tools.ProducerPerformance.readPayloadFile@POLYN217453 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.tools.ProducerPerformance.readPayloadFile@POLYN217453 the MagicNumber/String  'Reading payloads from: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.tools.ProducerPerformance.readPayloadFile@POLYN217453 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.tools.ProducerPerformance.readPayloadFile@POLYN217453 the MagicNumber/String  'File does not exist or empty file provided.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.tools.ProducerPerformance.readPayloadFile@POLYN217453 the MagicNumber/String  'Number of messages read: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00225"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'producer-performance' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00226"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00227"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00227] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'This tool is used to verify the producer performance.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00231"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'either --record-size or --payload-file must be specified but not both.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00234] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  '--topic' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'TOPIC' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00239"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'produce messages to this topic' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  '--num-records' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00243"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00245"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'NUM-RECORDS' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'numRecords' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'number of messages to produce' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  '--record-size' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'RECORD-SIZE' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00254"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'recordSize' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'message size in bytes. Note that you must provide exactly one of --record-size or --payload-file.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  '--payload-file' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'PAYLOAD-FILE' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'payloadFile' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00263"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'file to read the message payloads from. This works only for UTF-8 encoded text files. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00264"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'Payloads will be read from this file and a payload will be randomly selected when sending messages. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'Note that you must provide exactly one of --record-size or --payload-file.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  '--payload-delimiter' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00269"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00269] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'PAYLOAD-DELIMITER' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00272"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'payloadDelimiter' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00273"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  '\\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'provides delimiter to be used when --payload-file is provided. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00275"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00275] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'Defaults to new line. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'Note that this parameter will be ignored if --payload-file is not provided.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  '--throughput' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00280"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00282"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00282] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'THROUGHPUT' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00283"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'throttle maximum message throughput to *approximately* THROUGHPUT messages/sec. Set this to -1 to disable throttling.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  '--producer-props' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00286"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  '+' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00287"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'PROP-NAME=PROP-VALUE' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00290"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'producerConfig' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'kafka producer related configuration properties like bootstrap.servers,client.id etc. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00292"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'These configs take precedence over those passed via --producer.config.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  '--producer.config' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00298"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'CONFIG-FILE' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'producerConfigFile' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'producer config properties file.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00302"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  '--print-metrics' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00305"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'PRINT-METRICS' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'printMetrics' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00307"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00307] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'print out metrics at the end of the test.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00309"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  '--transactional-id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00313"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'TRANSACTIONAL-ID' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00314"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'transactionalId' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00315"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'performance-producer-default-transactional-id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'The transactionalId to use if transaction-duration-ms is &amp;gt; 0. Useful when testing the performance of concurrent transactions.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  '--transaction-duration-ms' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00320"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00322"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00322] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'TRANSACTION-DURATION' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00323"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00323] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'transactionDurationMs' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00325"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.tools.ProducerPerformance.argParser@POLYN218764 the MagicNumber/String  'The max age of each transaction. The commitTransaction will be called after this time has elapsed. Transactions are only enabled if this value is positive.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN223634 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00352"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00352] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN223634 the MagicNumber/String  500000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00353"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00353] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN223634 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00354"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN223634 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00355"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00355] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN223634 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00356"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00356] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN223634 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00357"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN223634 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00358"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00358] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN223634 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00359"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#359"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00359] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN223634 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00360"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00360] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN223634 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00361"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00361] In method org.apache.kafka.tools.ProducerPerformance.Stats.Stats@POLYN223634 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00365"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#365"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00365] For method record arguments int  iter|int  latency|int  bytes|long  time"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00374"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#374"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00374] In method org.apache.kafka.tools.ProducerPerformance.Stats.record@POLYN224935 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00385"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#385"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00385] For method nextCompletion arguments long  start|int  bytes|Stats  stats"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.tools.ProducerPerformance.Stats.printWindow@POLYN226489 the MagicNumber/String  1000.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.tools.ProducerPerformance.Stats.printWindow@POLYN226489 the MagicNumber/String  1000.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.tools.ProducerPerformance.Stats.printWindow@POLYN226489 the MagicNumber/String  1024.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.tools.ProducerPerformance.Stats.printWindow@POLYN226489 the MagicNumber/String  1024.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.tools.ProducerPerformance.Stats.printWindow@POLYN226489 the MagicNumber/String  '%d records sent, %.1f records/sec (%.2f MB/sec), %.1f ms avg latency, %.1f ms max latency.%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00405"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#405"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00405] In method org.apache.kafka.tools.ProducerPerformance.Stats.newWindow@POLYN227198 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00406] In method org.apache.kafka.tools.ProducerPerformance.Stats.newWindow@POLYN227198 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00407] In method org.apache.kafka.tools.ProducerPerformance.Stats.newWindow@POLYN227198 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00408"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#408"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00408] In method org.apache.kafka.tools.ProducerPerformance.Stats.newWindow@POLYN227198 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00413"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00413] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN227587 the MagicNumber/String  1000.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00414"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN227587 the MagicNumber/String  1000.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00414"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN227587 the MagicNumber/String  1024.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00414"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN227587 the MagicNumber/String  1024.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00415"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00415] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN227587 the MagicNumber/String  0.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00415"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00415] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN227587 the MagicNumber/String  0.95 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00415"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00415] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN227587 the MagicNumber/String  0.99 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00415"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00415] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN227587 the MagicNumber/String  0.999 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00416"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN227587 the MagicNumber/String  '%d records sent, %f records/sec (%.2f MB/sec), %.2f ms avg latency, %.2f ms max latency, %d ms 50th, %d ms 95th, %d ms 99th, %d ms 99.9th.%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00422"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#422"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00422] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN227587 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00423] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN227587 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00424"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00424] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN227587 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00425"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#425"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00425] In method org.apache.kafka.tools.ProducerPerformance.Stats.printTotal@POLYN227587 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00428"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#428"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00428] For method percentiles arguments int[]  latencies|int  count|double  ...percentiles"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00430"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00430] In method org.apache.kafka.tools.ProducerPerformance.Stats.percentiles@POLYN228747 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00432"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#432"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00432] In method org.apache.kafka.tools.ProducerPerformance.Stats.percentiles@POLYN228747 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00453"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#453"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00453] For method onCompletion arguments RecordMetadata  metadata|Exception  exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00457"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.html#457"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00457] In method org.apache.kafka.tools.ProducerPerformance.PerfCallback.onCompletion@POLYN230313 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/tools/src/main/java/org/apache/kafka/tools/ProducerPerformance.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
