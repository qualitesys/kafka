console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html" 
 , "texte" : "File connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java 123 rule violations " 
 , "fic2"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Transformation<R>"
 , "c2" : "org.apache.kafka.connect.transforms.Cast"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.transforms.Cast" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "R"
 , "c2" : "apply(R)"
 , "c3" : "4"
 , "c4" : "3"
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
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "R"
 , "c2" : "applySchemaless(R)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "R"
 , "c2" : "applyWithSchema(R)"
 , "c3" : "3"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "Schema"
 , "c2" : "getOrBuildSchema(Schema)"
 , "c3" : "11"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : "SchemaBuilder"
 , "c2" : "convertFieldType(Schema.Type)"
 , "c3" : "9"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "Object"
 , "c2" : "encodeLogicalType(Schema;Object)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Object"
 , "c2" : "castValueToType(Schema;Object;Schema.Type)"
 , "c3" : "12"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : "byte"
 , "c2" : "castToInt8(Object)"
 , "c3" : "7"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "short"
 , "c2" : "castToInt16(Object)"
 , "c3" : "7"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "castToInt32(Object)"
 , "c3" : "7"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "castToInt64(Object)"
 , "c3" : "7"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "float"
 , "c2" : "castToFloat32(Object)"
 , "c3" : "7"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "double"
 , "c2" : "castToFloat64(Object)"
 , "c3" : "7"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "castToBoolean(Object)"
 , "c3" : "7"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "castToString(Object)"
 , "c3" : "7"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "Schema"
 , "c2" : "operatingSchema(R)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Object"
 , "c2" : "operatingValue(R)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "R"
 , "c2" : "newRecord(R;Schema;Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Schema.Type>"
 , "c2" : "parseFieldTypes(List<String>)"
 , "c3" : "6"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "Schema.Type"
 , "c2" : "validCastType(Schema.Type;FieldType)"
 , "c3" : "5"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.png" 

 , "ligneplantuml" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.svg" }

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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "18"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "10"
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
 , "c4" : "65"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "27"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00040] The class Cast contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#99"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00099] For method configure arguments Map&lt;String ,? &gt;  props"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.connect.transforms.Cast.configure@POLYN240403 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00107] For method apply arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.connect.transforms.Cast.apply@POLYN241008 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.connect.transforms.Cast.apply@POLYN241008 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#129"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00129] For method applySchemaless arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00137] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.connect.transforms.Cast.applySchemaless@POLYN241632 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.connect.transforms.Cast.applySchemaless@POLYN241632 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.connect.transforms.Cast.applySchemaless@POLYN241632 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.connect.transforms.Cast.applySchemaless@POLYN241632 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.connect.transforms.Cast.applySchemaless@POLYN241632 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#143"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00143] For method applyWithSchema arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00156] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00157] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00158] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.connect.transforms.Cast.applyWithSchema@POLYN242891 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.connect.transforms.Cast.applyWithSchema@POLYN242891 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.connect.transforms.Cast.applyWithSchema@POLYN242891 the MagicNumber/String  'Cast field '{}' from '{}' to '{}'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#165"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00165] For method getOrBuildSchema arguments Schema  valueSchema"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#165"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00165] The argument valueSchema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00177] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00181] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.connect.transforms.Cast.getOrBuildSchema@POLYN244637 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.connect.transforms.Cast.getOrBuildSchema@POLYN244637 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.connect.transforms.Cast.getOrBuildSchema@POLYN244637 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.connect.transforms.Cast.getOrBuildSchema@POLYN244637 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#201"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00201] For method convertFieldType arguments Schema.Type  type"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.connect.transforms.Cast.convertFieldType@POLYN247018 the MagicNumber/String  'Unexpected type in Cast transformation: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#224"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00224] For method encodeLogicalType arguments Schema  schema|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#224"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00224] The argument schema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#236"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00236] For method castValueToType arguments Schema  schema|Object  value|Schema.Type  targetType"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#236"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00236] The argument targetType is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.connect.transforms.Cast.castValueToType@POLYN248685 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.connect.transforms.Cast.castValueToType@POLYN248685 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method org.apache.kafka.connect.transforms.Cast.castValueToType@POLYN248685 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00242] In method org.apache.kafka.connect.transforms.Cast.castValueToType@POLYN248685 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.connect.transforms.Cast.castValueToType@POLYN248685 the MagicNumber/String  'Cast transformation was passed a value of type ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.connect.transforms.Cast.castValueToType@POLYN248685 the MagicNumber/String  ' which is not supported by Connect's data API' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.connect.transforms.Cast.castValueToType@POLYN248685 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.connect.transforms.Cast.castValueToType@POLYN248685 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.connect.transforms.Cast.castValueToType@POLYN248685 the MagicNumber/String  ' is not supported in the Cast transformation.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00275"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00275] In method org.apache.kafka.connect.transforms.Cast.castValueToType@POLYN248685 the MagicNumber/String  'Value (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00275"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00275] In method org.apache.kafka.connect.transforms.Cast.castValueToType@POLYN248685 the MagicNumber/String  ') was out of range for requested data type' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#279"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00279] For method castToInt8 arguments Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#279"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00279] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00283"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.connect.transforms.Cast.castToInt8@POLYN250931 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00283"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.connect.transforms.Cast.castToInt8@POLYN250931 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.connect.transforms.Cast.castToInt8@POLYN250931 the MagicNumber/String  'Unexpected type in Cast transformation: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#290"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00290] For method castToInt16 arguments Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#290"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00290] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.connect.transforms.Cast.castToInt16@POLYN251616 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.connect.transforms.Cast.castToInt16@POLYN251616 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.connect.transforms.Cast.castToInt16@POLYN251616 the MagicNumber/String  'Unexpected type in Cast transformation: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#301"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00301] For method castToInt32 arguments Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#301"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00301] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.connect.transforms.Cast.castToInt32@POLYN252301 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.connect.transforms.Cast.castToInt32@POLYN252301 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00309"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method org.apache.kafka.connect.transforms.Cast.castToInt32@POLYN252301 the MagicNumber/String  'Unexpected type in Cast transformation: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#312"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00312] For method castToInt64 arguments Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#312"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00312] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00316"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.connect.transforms.Cast.castToInt64@POLYN252948 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00316"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.connect.transforms.Cast.castToInt64@POLYN252948 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00320"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.connect.transforms.Cast.castToInt64@POLYN252948 the MagicNumber/String  'Unexpected type in Cast transformation: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00323"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#323"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00323] For method castToFloat32 arguments Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00323"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#323"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00323] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.connect.transforms.Cast.castToFloat32@POLYN253633 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.connect.transforms.Cast.castToFloat32@POLYN253633 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.connect.transforms.Cast.castToFloat32@POLYN253633 the MagicNumber/String  'Unexpected type in Cast transformation: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00334"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#334"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00334] For method castToFloat64 arguments Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00334"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#334"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00334] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00338"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00338] In method org.apache.kafka.connect.transforms.Cast.castToFloat64@POLYN254304 the MagicNumber/String  1. should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00338"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00338] In method org.apache.kafka.connect.transforms.Cast.castToFloat64@POLYN254304 the MagicNumber/String  0. should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00342"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#342"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00342] In method org.apache.kafka.connect.transforms.Cast.castToFloat64@POLYN254304 the MagicNumber/String  'Unexpected type in Cast transformation: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#345"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00345] For method castToBoolean arguments Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#345"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00345] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00347"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method org.apache.kafka.connect.transforms.Cast.castToBoolean@POLYN254951 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00353"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00353] In method org.apache.kafka.connect.transforms.Cast.castToBoolean@POLYN254951 the MagicNumber/String  'Unexpected type in Cast transformation: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00356"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#356"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00356] For method castToString arguments Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00356"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#356"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00356] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00371"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#371"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00371] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00373"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#373"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00373] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00375"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#375"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00375] For method newRecord arguments R  record|Schema  updatedSchema|Object  updatedValue"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#377"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00377] For method parseFieldTypes arguments List&lt;String &gt;  mappings"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#377"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00377] The argument mappings is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00381] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00386"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#386"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00386] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00390"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00390] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00393] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.connect.transforms.Cast.parseFieldTypes@POLYN256832 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00381] In method org.apache.kafka.connect.transforms.Cast.parseFieldTypes@POLYN256832 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00382"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00382] In method org.apache.kafka.connect.transforms.Cast.parseFieldTypes@POLYN256832 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00383] In method org.apache.kafka.connect.transforms.Cast.parseFieldTypes@POLYN256832 the MagicNumber/String  'Invalid rename mapping: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00385] In method org.apache.kafka.connect.transforms.Cast.parseFieldTypes@POLYN256832 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00386"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#386"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00386] In method org.apache.kafka.connect.transforms.Cast.parseFieldTypes@POLYN256832 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00388"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.apache.kafka.connect.transforms.Cast.parseFieldTypes@POLYN256832 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00392"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00392] In method org.apache.kafka.connect.transforms.Cast.parseFieldTypes@POLYN256832 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00394"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.connect.transforms.Cast.parseFieldTypes@POLYN256832 the MagicNumber/String  'Invalid type found in casting spec: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00394"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.connect.transforms.Cast.parseFieldTypes@POLYN256832 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00396"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#396"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00396] In method org.apache.kafka.connect.transforms.Cast.parseFieldTypes@POLYN256832 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00399"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00399] In method org.apache.kafka.connect.transforms.Cast.parseFieldTypes@POLYN256832 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#400"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00400] In method org.apache.kafka.connect.transforms.Cast.parseFieldTypes@POLYN256832 the MagicNumber/String  'Cast transformations that specify a type to cast the entire value to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00401"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#401"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00401] In method org.apache.kafka.connect.transforms.Cast.parseFieldTypes@POLYN256832 the MagicNumber/String  'may ony specify a single cast in their spec' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00410"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#410"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00410] For method validCastType arguments Schema.Type  type|FieldType  fieldType"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.connect.transforms.Cast.validCastType@POLYN259053 the MagicNumber/String  'Cast transformation does not support casting from ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00415"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00415] In method org.apache.kafka.connect.transforms.Cast.validCastType@POLYN259053 the MagicNumber/String  '; supported types are ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00420"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#420"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00420] In method org.apache.kafka.connect.transforms.Cast.validCastType@POLYN259053 the MagicNumber/String  'Cast transformation does not support casting to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00421"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00421] In method org.apache.kafka.connect.transforms.Cast.validCastType@POLYN259053 the MagicNumber/String  '; supported types are ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00430"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#430"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00430] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00430"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#430"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00430] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00435"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#435"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00435] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00435"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#435"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00435] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#440"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00440] For method newRecord arguments R  record|Schema  updatedSchema|Object  updatedValue"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#440"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00440] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00447"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#447"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00447] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00447"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#447"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00447] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00452"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#452"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00452] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00452"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#452"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00452] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00457"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#457"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00457] For method newRecord arguments R  record|Schema  updatedSchema|Object  updatedValue"
}} 
,
{ "ligne" : {
   "c1" : "00457"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#457"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00457] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00125] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Cast.java.html#125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00125] Void method close is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
