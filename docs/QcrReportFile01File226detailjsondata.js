console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java 72 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractConfig"
 , "c2" : "org.apache.kafka.clients.producer.ProducerConfig"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.producer.ProducerConfig" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Map<String,Object>"
 , "c2" : "postProcessParsedConfig(Map<String,Object>)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeOverrideClientId(Map<String,Object>)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "postProcessAndValidateIdempotenceConfigs(Map<String,Object>)"
 , "c3" : "10"
 , "c4" : "22"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "parseAcks(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Object>"
 , "c2" : "appendSerializerToConfig(Map<String,Object>;Serializer<?>;Serializer<?>)"
 , "c3" : "7"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "ProducerConfig"
 , "c2" : "ProducerConfig(Properties)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ProducerConfig"
 , "c2" : "ProducerConfig(Map<String,Object>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ProducerConfig"
 , "c2" : "ProducerConfig(Map<?,?>;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "configNames()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConfigDef"
 , "c2" : "configDef()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.svg" }

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
 , "c4" : "22"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "38"
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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#456"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00456] For method postProcessParsedConfig arguments Map&lt;String ,Object &gt;  parsedValues"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#456"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00456] For method postProcessParsedConfig list of called methods Object monObjet|java.util.Map&lt;String,Object&gt; CommonClientConfigs_postProcessReconnectBackoffConfigsN251516"
}} 
,
{ "ligne" : {
   "c1" : "00464"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#464"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00464] For method maybeOverrideClientId arguments Map&lt;String ,Object &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00464"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#464"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00464] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00471"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#471"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00471] In method org.apache.kafka.clients.producer.ProducerConfig.maybeOverrideClientId@POLYN251759 the MagicNumber/String  'producer-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00471"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#471"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00471] In method org.apache.kafka.clients.producer.ProducerConfig.maybeOverrideClientId@POLYN251759 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00476"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#476"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00476] For method postProcessAndValidateIdempotenceConfigs arguments Map&lt;String ,Object &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00476"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#476"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00476] For method postProcessAndValidateIdempotenceConfigs list of called methods Object monObjet|String parseAcksN252791"
}} 
,
{ "ligne" : {
   "c1" : "00476"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#476"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00476] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00482"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#482"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00482] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00487"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#487"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00487] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#489"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00489] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  'Must set ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#489"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00489] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  ' to non-zero when using the idempotent producer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00491"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#491"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00491] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  'Idempotence will be disabled because {} is set to 0.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00492"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#492"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00492] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#496"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00496] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#498"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00498] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  'Must set ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#498"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00498] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  ' to all in order to use the idempotent ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00499] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  'producer. Otherwise we cannot guarantee idempotence.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00501"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#501"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00501] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  'Idempotence will be disabled because {} is set to {}, not set to 'all'.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00502"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#502"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00502] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#508"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00508] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  'Must set ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#508"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00508] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  ' to at most 5' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00509"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#509"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00509] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  ' to use the idempotent producer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00511"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#511"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00511] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  'Idempotence will be disabled because {} is set to {}, which is greater than 5. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00512"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#512"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00512] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  'Please note that in v4.0.0 and onward, this will become an error.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00513"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#513"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00513] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00518"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#518"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00518] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00519"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#519"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00519] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00525"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#525"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00525] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  'Cannot set a ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00525"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#525"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00525] In method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String  ' without also enabling idempotence.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00529"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#529"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00529] For method parseAcks arguments String  acksString"
}} 
,
{ "ligne" : {
   "c1" : "00529"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#529"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00529] The argument acksString is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00531"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#531"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00531] In method org.apache.kafka.clients.producer.ProducerConfig.parseAcks@POLYN255444 the MagicNumber/String  'all' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00531"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#531"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00531] In method org.apache.kafka.clients.producer.ProducerConfig.parseAcks@POLYN255444 the MagicNumber/String  '-1' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00531"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#531"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00531] In method org.apache.kafka.clients.producer.ProducerConfig.parseAcks@POLYN255444 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00533"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#533"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00533] In method org.apache.kafka.clients.producer.ProducerConfig.parseAcks@POLYN255444 the MagicNumber/String  'Invalid configuration value for 'acks': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00537"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#537"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00537] For method appendSerializerToConfig arguments Map&lt;String ,Object &gt;  configs|Serializer&lt;? &gt;  keySerializer|Serializer&lt;? &gt;  valueSerializer"
}} 
,
{ "ligne" : {
   "c1" : "00542"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#542"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00542] In method org.apache.kafka.clients.producer.ProducerConfig.appendSerializerToConfig@POLYN255981 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00544"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#544"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00544] In method org.apache.kafka.clients.producer.ProducerConfig.appendSerializerToConfig@POLYN255981 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00545"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#545"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00545] In method org.apache.kafka.clients.producer.ProducerConfig.appendSerializerToConfig@POLYN255981 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00545"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#545"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00545] In method org.apache.kafka.clients.producer.ProducerConfig.appendSerializerToConfig@POLYN255981 the MagicNumber/String  'must be non-null.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00546"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#546"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00546] In method org.apache.kafka.clients.producer.ProducerConfig.appendSerializerToConfig@POLYN255981 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00548"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#548"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00548] In method org.apache.kafka.clients.producer.ProducerConfig.appendSerializerToConfig@POLYN255981 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00549"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#549"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00549] In method org.apache.kafka.clients.producer.ProducerConfig.appendSerializerToConfig@POLYN255981 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00549"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#549"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00549] In method org.apache.kafka.clients.producer.ProducerConfig.appendSerializerToConfig@POLYN255981 the MagicNumber/String  'must be non-null.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00573"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#573"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00573] For method main arguments String[]  args"
}} 
,
{ "ligne" : {
   "c1" : "00574"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#574"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00574] In method org.apache.kafka.clients.producer.ProducerConfig.main@POLYN257905 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00574"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#574"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00574] In method org.apache.kafka.clients.producer.ProducerConfig.main@POLYN257905 the MagicNumber/String  'producerconfigs_' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538"
}} 
,
{ "ligne" : {
   "c1" : "00482"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#482"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00482] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00487"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00487] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#489"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00489] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String ' to non-zero when using the idempotent producer.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#489"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00489] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String 'Must set ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00491"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#491"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00491] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String 'Idempotence will be disabled because {} is set to 0.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00492"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#492"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00492] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#496"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00496] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#498"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00498] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String ' to all in order to use the idempotent ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#498"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00498] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String 'Must set ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#499"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00499] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String 'producer. Otherwise we cannot guarantee idempotence.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00501"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#501"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00501] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String 'Idempotence will be disabled because {} is set to {}, not set to 'all'.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00502"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#502"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00502] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#508"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00508] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String ' to at most 5' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#508"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00508] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String 'Must set ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00509"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#509"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00509] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String ' to use the idempotent producer.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00511"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#511"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00511] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String 'Idempotence will be disabled because {} is set to {}, which is greater than 5. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00512"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#512"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00512] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String 'Please note that in v4.0.0 and onward, this will become an error.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00513"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#513"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00513] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00518"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#518"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00518] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00519"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#519"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00519] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00525"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#525"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00525] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String ' without also enabling idempotence.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00525"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java.html#525"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00525] In the recursive method org.apache.kafka.clients.producer.ProducerConfig.postProcessAndValidateIdempotenceConfigs@POLYN252538 the MagicNumber/String 'Cannot set a ' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
