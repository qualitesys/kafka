console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html" 
 , "texte" : "File generator/src/main/java/org/apache/kafka/message/FieldType.java 69 rule violations " 
 , "fic2"  : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.message.FieldType"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.message.FieldType" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "FieldType"
 , "c2" : "parse(String)"
 , "c3" : "19"
 , "c4" : "20"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "getBoxedJavaType(HeaderGenerator)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isArray()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isStructArray()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "serializationIsDifferentInFlexibleVersions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isBytes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isRecords()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isFloat()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isStruct()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "canBeNullable()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Optional<Integer>"
 , "c2" : "fixedLength()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isVariableLength()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.png" 

 , "ligneplantuml" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "14"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "37"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "14"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00010"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class BoolFieldType contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#15"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00015] For method getBoxedJavaType arguments HeaderGenerator  headerGenerator"
}} 
,
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method org.apache.kafka.message.FieldType.BoolFieldType.getBoxedJavaType@POLYN184358 the MagicNumber/String  'Boolean' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method org.apache.kafka.message.FieldType.BoolFieldType.fixedLength@POLYN184503 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00030] The class Int8FieldType contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method getBoxedJavaType arguments HeaderGenerator  headerGenerator"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.message.FieldType.Int8FieldType.getBoxedJavaType@POLYN184963 the MagicNumber/String  'Byte' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.message.FieldType.Int8FieldType.fixedLength@POLYN185108 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00050] The class Int16FieldType contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method getBoxedJavaType arguments HeaderGenerator  headerGenerator"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.message.FieldType.Int16FieldType.getBoxedJavaType@POLYN185568 the MagicNumber/String  'Short' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.message.FieldType.Int16FieldType.fixedLength@POLYN185713 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00070] The class Uint16FieldType contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method getBoxedJavaType arguments HeaderGenerator  headerGenerator"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.message.FieldType.Uint16FieldType.getBoxedJavaType@POLYN186173 the MagicNumber/String  'Integer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.message.FieldType.Uint16FieldType.fixedLength@POLYN186318 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00090] The class Int32FieldType contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#95"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00095] For method getBoxedJavaType arguments HeaderGenerator  headerGenerator"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.message.FieldType.Int32FieldType.getBoxedJavaType@POLYN186778 the MagicNumber/String  'Integer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.message.FieldType.Int32FieldType.fixedLength@POLYN186923 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00110] The class Uint32FieldType contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#115"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00115] For method getBoxedJavaType arguments HeaderGenerator  headerGenerator"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.message.FieldType.Uint32FieldType.getBoxedJavaType@POLYN187383 the MagicNumber/String  'Long' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.message.FieldType.Uint32FieldType.fixedLength@POLYN187528 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00130] The class Int64FieldType contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00135] For method getBoxedJavaType arguments HeaderGenerator  headerGenerator"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.message.FieldType.Int64FieldType.getBoxedJavaType@POLYN187988 the MagicNumber/String  'Long' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.message.FieldType.Int64FieldType.fixedLength@POLYN188133 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00150] The class UUIDFieldType contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#155"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00155] For method getBoxedJavaType arguments HeaderGenerator  headerGenerator"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#155"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00155] The argument headerGenerator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.message.FieldType.UUIDFieldType.getBoxedJavaType@POLYN188593 the MagicNumber/String  'Uuid' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.message.FieldType.UUIDFieldType.fixedLength@POLYN188817 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00171] The class Float64FieldType contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.message.FieldType.Float64FieldType.fixedLength@POLYN189298 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#181"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00181] For method getBoxedJavaType arguments HeaderGenerator  headerGenerator"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.message.FieldType.Float64FieldType.getBoxedJavaType@POLYN189439 the MagicNumber/String  'Double' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.message.FieldType.Float64FieldType.isFloat@POLYN189563 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00196] The class StringFieldType contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#201"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00201] For method getBoxedJavaType arguments HeaderGenerator  headerGenerator"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.message.FieldType.StringFieldType.getBoxedJavaType@POLYN189984 the MagicNumber/String  'String' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.message.FieldType.StringFieldType.serializationIsDifferentInFlexibleVersions@POLYN190108 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.message.FieldType.StringFieldType.isString@POLYN190210 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.message.FieldType.StringFieldType.canBeNullable@POLYN190312 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00226] The class BytesFieldType contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#231"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00231] For method getBoxedJavaType arguments HeaderGenerator  headerGenerator"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#231"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00231] The argument headerGenerator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.message.FieldType.BytesFieldType.getBoxedJavaType@POLYN190733 the MagicNumber/String  'ByteBuffer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.message.FieldType.BytesFieldType.serializationIsDifferentInFlexibleVersions@POLYN190936 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.message.FieldType.BytesFieldType.isBytes@POLYN191038 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.message.FieldType.BytesFieldType.canBeNullable@POLYN191140 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00257] The class RecordsFieldType contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#262"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00262] For method getBoxedJavaType arguments HeaderGenerator  headerGenerator"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#262"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00262] The argument headerGenerator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.message.FieldType.RecordsFieldType.getBoxedJavaType@POLYN191561 the MagicNumber/String  'BaseRecords' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00269"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00269] In method org.apache.kafka.message.FieldType.RecordsFieldType.serializationIsDifferentInFlexibleVersions@POLYN191764 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.message.FieldType.RecordsFieldType.isRecords@POLYN191866 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.message.FieldType.RecordsFieldType.canBeNullable@POLYN191968 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00288] The class StructType contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#296"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00296] For method getBoxedJavaType arguments HeaderGenerator  headerGenerator"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.apache.kafka.message.FieldType.StructType.serializationIsDifferentInFlexibleVersions@POLYN192507 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00307] In method org.apache.kafka.message.FieldType.StructType.isStruct@POLYN192609 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00320"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00320] The class ArrayType contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00329"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00329] In method org.apache.kafka.message.FieldType.ArrayType.serializationIsDifferentInFlexibleVersions@POLYN193112 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#333"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00333] For method getBoxedJavaType arguments HeaderGenerator  headerGenerator"
}} 
,
{ "ligne" : {
   "c1" : "00339"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00339] In method org.apache.kafka.message.FieldType.ArrayType.isArray@POLYN193355 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.message.FieldType.ArrayType.canBeNullable@POLYN193577 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.message.FieldType.ArrayType.toString@POLYN193871 the MagicNumber/String  '[]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00366"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/FieldType.java.html#366"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00366] The argument string is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
};
console.log('leListeStr 99 main end');
