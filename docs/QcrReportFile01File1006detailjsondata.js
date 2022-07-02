console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html" 
 , "texte" : "File connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java 209 rule violations " 
 , "fic2"  : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Converter"
 , "c2" : "org.apache.kafka.connect.json.JsonConverter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.json.JsonConverter" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "JsonConverter"
 , "c2" : "JsonConverter()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "sizeOfFromConnectSchemaCache()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "sizeOfToConnectSchemaCache()"
 , "c3" : "1"
 , "c4" : "1"
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
 , "c4" : "5"
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
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
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
   "c1" : "byte[]"
 , "c2" : "fromConnectData(String;Schema;Object)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "SchemaAndValue"
 , "c2" : "toConnectData(String;byte[])"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "ObjectNode"
 , "c2" : "asJsonSchema(Schema)"
 , "c3" : "22"
 , "c4" : "47"
}} 
,
{ "ligne" : {
   "c1" : "Schema"
 , "c2" : "asConnectSchema(JsonNode)"
 , "c3" : "31"
 , "c4" : "62"
}} 
,
{ "ligne" : {
   "c1" : "JsonNode"
 , "c2" : "convertToJsonWithEnvelope(Schema;Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "JsonNode"
 , "c2" : "convertToJsonWithoutEnvelope(Schema;Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "JsonNode"
 , "c2" : "convertToJson(Schema;Object)"
 , "c3" : "38"
 , "c4" : "53"
}} 
,
{ "ligne" : {
   "c1" : "Object"
 , "c2" : "convertToConnect(Schema;JsonNode)"
 , "c3" : "20"
 , "c4" : "24"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.png" 

 , "ligneplantuml" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "82"
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
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "12"
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
 , "c4" : "86"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00043] The class JsonConverter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00084] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#245"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00245] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#256"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00256] For method configure arguments Map&lt;String ,? &gt;  configs|boolean  isKey"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#268"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00268] For method fromConnectHeader arguments String  topic|String  headerKey|Schema  schema|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#273"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00273] For method toConnectHeader arguments String  topic|String  headerKey|byte[]  value"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#278"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00278] For method fromConnectData arguments String  topic|Schema  schema|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.connect.json.JsonConverter.fromConnectData@POLYN303640 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.connect.json.JsonConverter.fromConnectData@POLYN303640 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.connect.json.JsonConverter.fromConnectData@POLYN303640 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.connect.json.JsonConverter.fromConnectData@POLYN303640 the MagicNumber/String  'Converting Kafka Connect data to byte[] failed due to serialization error: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#292"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00292] For method toConnectData arguments String  topic|byte[]  value"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#292"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00292] For method toConnectData list of called methods Object monObjet|org.apache.kafka.connect.data.SchemaAndValue asConnectSchemaN305830"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.connect.json.JsonConverter.toConnectData@POLYN304418 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00303"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.connect.json.JsonConverter.toConnectData@POLYN304418 the MagicNumber/String  'Converting byte[] to Kafka Connect data failed due to serialization error: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00306"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.connect.json.JsonConverter.toConnectData@POLYN304418 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00307] In method org.apache.kafka.connect.json.JsonConverter.toConnectData@POLYN304418 the MagicNumber/String  'JsonConverter with schemas.enable requires \'schema\' and \'payload\' fields and may not contain additional fields.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00308] In method org.apache.kafka.connect.json.JsonConverter.toConnectData@POLYN304418 the MagicNumber/String  ' If you are trying to deserialize plain JSON data, set schemas.enable=false in your converter configuration.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00314"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.connect.json.JsonConverter.toConnectData@POLYN304418 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#326"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00326] For method asJsonSchema arguments Schema  schema"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#326"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00326] For method asJsonSchema list of called methods Object monObjet|com.fasterxml.jackson.databind.node.ObjectNode JSON_NODE_FACTORY_objectNodeN308171|com.fasterxml.jackson.databind.node.ObjectNode JSON_NODE_FACTORY_objectNodeN308675|com.fasterxml.jackson.databind.node.ObjectNode asJsonSchemaN308996"
}} 
,
{ "ligne" : {
   "c1" : "00376"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00376] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00328"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#328"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00328] In method org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00383] In method org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134 the MagicNumber/String  'Couldn't translate unsupported schema type ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00383] In method org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00387"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00387] In method org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#389"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00389] In method org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00391"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00391] In method org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00399"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00399] In method org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00407"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#407"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00407] For method asConnectSchema arguments JsonNode  jsonSchema"
}} 
,
{ "ligne" : {
   "c1" : "00407"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#407"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00407] For method asConnectSchema list of called methods Object monObjet|org.apache.kafka.connect.data.SchemaBuilder SchemaBuilder_boolN311985|org.apache.kafka.connect.data.SchemaBuilder SchemaBuilder_int8N312116|org.apache.kafka.connect.data.SchemaBuilder SchemaBuilder_int16N312247|org.apache.kafka.connect.data.SchemaBuilder SchemaBuilder_int32N312378|org.apache.kafka.connect.data.SchemaBuilder SchemaBuilder_int64N312509|org.apache.kafka.connect.data.SchemaBuilder SchemaBuilder_float32N312640|org.apache.kafka.connect.data.SchemaBuilder SchemaBuilder_float64N312771|org.apache.kafka.connect.data.SchemaBuilder SchemaBuilder_bytesN312902|org.apache.kafka.connect.data.SchemaBuilder SchemaBuilder_stringN313033|org.apache.kafka.connect.data.SchemaBuilder SchemaBuilder_arrayN313439|org.apache.kafka.connect.data.SchemaBuilder SchemaBuilder_mapN314086|org.apache.kafka.connect.data.SchemaBuilder SchemaBuilder_structN314320|org.apache.kafka.connect.data.Schema builder_buildN317757"
}} 
,
{ "ligne" : {
   "c1" : "00407"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#407"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00407] The argument jsonSchema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00469"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#469"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00469] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00503"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#503"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00503] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00504"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#504"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00504] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00409"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#409"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00409] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00412"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#412"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00412] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00416"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00417"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#417"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00417] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  'Schema must contain 'type' field' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00450"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00450] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00451"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#451"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00451] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  'Array schema did not specify the element type' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#456"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00456] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00457"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#457"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00457] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  'Map schema did not specify the key type' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00459"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#459"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00459] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00460"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#460"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00460] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  'Map schema did not specify the value type' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00466"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#466"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00466] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00467"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#467"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00467] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  'Struct schema's \'fields\' argument is not an array.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00470"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#470"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00470] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00471"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#471"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00471] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  'Struct schema's field name not specified properly' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00476"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#476"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00476] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  'Unknown schema type: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00481"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#481"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00481] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00487"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#487"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00487] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00491"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#491"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00491] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#496"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00496] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00500"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#500"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00500] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00506"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00506] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  'Schema parameters must have string values.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00512"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#512"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00512] In method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00522"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#522"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00522] For method convertToJsonWithEnvelope arguments Schema  schema|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00526"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#526"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00526] For method convertToJsonWithoutEnvelope arguments Schema  schema|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00531"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#531"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00531] For method convertToJson arguments Schema  schema|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00586"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#586"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00586] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00587"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#587"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00587] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00599"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#599"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00599] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00614"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#614"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00614] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00615"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#615"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00615] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00616"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#616"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00616] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00617"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#617"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00617] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00532"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#532"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00532] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00533"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#533"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00533] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00534"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#534"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00534] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00535"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#535"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00535] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00539"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#539"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00539] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  'Conversion error: null value for field that is required and has no default value' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00542"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#542"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00542] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00542"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#542"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00542] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00544"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#544"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00544] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00550"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#550"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00550] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00552"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#552"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00552] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00553"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#553"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00553] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  'Java class ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00553"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#553"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00553] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  ' does not have corresponding schema type.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00581"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#581"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00581] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  'Invalid type for bytes type: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00586"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#586"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00586] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00586"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#586"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00586] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00596"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#596"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00596] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00597"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#597"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00597] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00600"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#600"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00600] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00607"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#607"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00607] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00608"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#608"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00608] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00614"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#614"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00614] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00614"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#614"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00614] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00615"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#615"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00615] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00615"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#615"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00615] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00629"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#629"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00629] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  'Mismatching schema.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00638"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#638"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00638] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  'Couldn't convert ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00638"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#638"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00638] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  ' to JSON.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00640"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#640"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00640] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00640"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#640"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00640] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  'unknown schema' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00641"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#641"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00641] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  'Invalid type for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00641"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#641"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00641] In method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00646"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#646"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00646] For method convertToConnect arguments Schema  schema|JsonNode  jsonValue"
}} 
,
{ "ligne" : {
   "c1" : "00646"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#646"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00646] For method convertToConnect list of called methods Object monObjet|org.apache.kafka.connect.data.Schema.Type schema_typeN326322"
}} 
,
{ "ligne" : {
   "c1" : "00648"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#648"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00648] In method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00650"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#650"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00650] In method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00651"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#651"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00651] In method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00654"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#654"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00654] In method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00655"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#655"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00655] In method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String  'Invalid null value for required ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00655"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#655"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00655] In method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String  ' field' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00662"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#662"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00662] In method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00685"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#685"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00685] In method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00691"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#691"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00691] In method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00692"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#692"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00692] In method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String  'Unknown schema type: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00694"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#694"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00694] In method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00694"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#694"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00694] In method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00696"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#696"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00696] In method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#263"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00263] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#263"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00263] Void method close is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.json.JsonConverter.JsonConverter@POLYN301043"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.json.JsonConverter.convertToJsonWithoutEnvelope@POLYN318432"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.json.JsonConverter.fromConnectHeader@POLYN303131"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.json.JsonConverter.toConnectData@POLYN304418"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.json.JsonConverter.toConnectHeader@POLYN303403"
}} 
,
{ "ligne" : {
   "c1" : "00409"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#409"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00409] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00412"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#412"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00412] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00416"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#416"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00416] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00417"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#417"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00417] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String 'Schema must contain 'type' field' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00450"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#450"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00450] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00451"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#451"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00451] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String 'Array schema did not specify the element type' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00456] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00457"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#457"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00457] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String 'Map schema did not specify the key type' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00459"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#459"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00459] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00460"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00460] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String 'Map schema did not specify the value type' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00466"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#466"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00466] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00467"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#467"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00467] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String 'Struct schema's \'fields\' argument is not an array.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00470"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#470"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00470] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00471"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#471"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00471] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String 'Struct schema's field name not specified properly' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00476"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#476"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00476] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String 'Unknown schema type: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00481"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#481"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00481] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00487"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00487] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00491"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#491"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00491] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#496"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00496] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00500"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#500"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00500] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00506"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#506"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00506] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String 'Schema parameters must have string values.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00512"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#512"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00512] In the recursive method org.apache.kafka.connect.json.JsonConverter.asConnectSchema@POLYN311191 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#327"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00327] In the recursive method org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00328"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#328"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00328] In the recursive method org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#331"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00331] In the recursive method org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#383"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00383] In the recursive method org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134 the MagicNumber/String '.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#383"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00383] In the recursive method org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134 the MagicNumber/String 'Couldn't translate unsupported schema type ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00387"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#387"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00387] In the recursive method org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#389"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00389] In the recursive method org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00391"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#391"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00391] In the recursive method org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#393"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00393] In the recursive method org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00399"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#399"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00399] In the recursive method org.apache.kafka.connect.json.JsonConverter.asJsonSchema@POLYN306134 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00648"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#648"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00648] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00650"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#650"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00650] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00651"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#651"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00651] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00654"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#654"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00654] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00655"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#655"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00655] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String ' field' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00655"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#655"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00655] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String 'Invalid null value for required ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00662"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#662"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00662] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00685"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#685"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00685] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00691"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#691"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00691] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00692"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#692"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00692] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String 'Unknown schema type: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00694"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#694"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00694] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00694"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#694"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00694] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00696"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#696"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00696] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToConnect@POLYN326086 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00532"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#532"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00532] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00533"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#533"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00533] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00534"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#534"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00534] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00535"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#535"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00535] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00539"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#539"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00539] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String 'Conversion error: null value for field that is required and has no default value' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00542"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#542"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00542] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00542"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#542"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00542] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00544"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#544"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00544] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00550"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#550"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00550] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00552"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#552"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00552] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00553"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#553"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00553] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String ' does not have corresponding schema type.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00553"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#553"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00553] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String 'Java class ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00581"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#581"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00581] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String 'Invalid type for bytes type: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00586"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#586"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00586] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00586"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#586"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00586] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00596"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#596"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00596] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00597"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#597"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00597] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00600"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#600"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00600] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00607"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#607"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00607] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00608"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#608"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00608] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00614"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#614"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00614] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00614"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#614"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00614] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00615"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#615"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00615] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00615"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#615"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00615] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00629"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#629"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00629] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String 'Mismatching schema.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00638"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#638"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00638] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String ' to JSON.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00638"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#638"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00638] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String 'Couldn't convert ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00640"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#640"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00640] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String 'unknown schema' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00640"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#640"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00640] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00641"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#641"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00641] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String ': ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00641"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#641"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00641] In the recursive method org.apache.kafka.connect.json.JsonConverter.convertToJson@POLYN318737 the MagicNumber/String 'Invalid type for ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00296] In the recursive method org.apache.kafka.connect.json.JsonConverter.toConnectData@POLYN304418 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00303"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#303"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00303] In the recursive method org.apache.kafka.connect.json.JsonConverter.toConnectData@POLYN304418 the MagicNumber/String 'Converting byte[] to Kafka Connect data failed due to serialization error: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00306"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#306"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00306] In the recursive method org.apache.kafka.connect.json.JsonConverter.toConnectData@POLYN304418 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#307"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00307] In the recursive method org.apache.kafka.connect.json.JsonConverter.toConnectData@POLYN304418 the MagicNumber/String 'JsonConverter with schemas.enable requires \'schema\' and \'payload\' fields and may not contain additional fields.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#308"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00308] In the recursive method org.apache.kafka.connect.json.JsonConverter.toConnectData@POLYN304418 the MagicNumber/String ' If you are trying to deserialize plain JSON data, set schemas.enable=false in your converter configuration.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00314"
 , "c1link" : "./qc/connect/json/src/main/java/org/apache/kafka/connect/json/JsonConverter.java.html#314"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00314] In the recursive method org.apache.kafka.connect.json.JsonConverter.toConnectData@POLYN304418 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
