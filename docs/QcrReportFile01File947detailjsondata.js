console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java 90 rule violations " 
 , "fic2"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.data.SchemaProjector"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.data.SchemaProjector" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Object"
 , "c2" : "project(Schema;Object;Schema)"
 , "c3" : "9"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Object"
 , "c2" : "projectRequiredSchema(Schema;Object;Schema)"
 , "c3" : "13"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Object"
 , "c2" : "projectStruct(Schema;Struct;Schema)"
 , "c3" : "8"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "checkMaybeCompatible(Schema;Schema)"
 , "c3" : "6"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Object"
 , "c2" : "projectArray(Schema;Object;Schema)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Object"
 , "c2" : "projectMap(Schema;Object;Schema)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "Object"
 , "c2" : "projectPrimitive(Schema;Object;Schema)"
 , "c3" : "9"
 , "c4" : "19"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isPromotable(Type;Type)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.png" 

 , "ligneplantuml" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.svg" }

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
 , "c2" : "QC-JAV999995"
 , "c3" : "Recursivity with depth over 1 between method xx and method yy"
 , "c4" : "24"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "14"
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
 , "c4" : "9"
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
 , "c4" : "18"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "8"
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
   "c1" : "00018"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00018] The class SchemaProjector contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method project arguments Schema  source|Object  record|Schema  target"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#32"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00032] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#32"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00032] The argument target is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.connect.data.SchemaProjector.project@POLYN174350 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.connect.data.SchemaProjector.project@POLYN174350 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.connect.data.SchemaProjector.project@POLYN174350 the MagicNumber/String  'Writer schema is optional, however, target schema does not provide a default value.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.connect.data.SchemaProjector.project@POLYN174350 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.connect.data.SchemaProjector.project@POLYN174350 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method projectRequiredSchema arguments Schema  source|Object  record|Schema  target"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#53"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00053] The argument target is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175401 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method projectStruct arguments Schema  source|Struct  sourceStruct|Schema  target"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00075] For method projectStruct list of called methods Object monObjet|String targetField_nameN176861|Object source_fieldN176936|Object sourceStruct_getN177103"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#75"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00075] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#75"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00075] The argument sourceStruct is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#75"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00075] The argument target is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00078] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00079] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00081] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00083] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00085] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.connect.data.SchemaProjector.projectStruct@POLYN176515 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.connect.data.SchemaProjector.projectStruct@POLYN176515 the MagicNumber/String  'Error projecting ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.connect.data.SchemaProjector.projectStruct@POLYN176515 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.connect.data.SchemaProjector.projectStruct@POLYN176515 the MagicNumber/String  'Required field `' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.connect.data.SchemaProjector.projectStruct@POLYN176515 the MagicNumber/String  '` is missing from source schema: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method checkMaybeCompatible arguments Schema  source|Schema  target"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#100"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00100] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#100"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00100] The argument target is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00101] The same method call target.type()isPromotable(source.type(),target.type()) is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00101] The same method call isPromotable(source.type(),target.type()) is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.connect.data.SchemaProjector.checkMaybeCompatible@POLYN178174 the MagicNumber/String  'Schema type mismatch. source type: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.connect.data.SchemaProjector.checkMaybeCompatible@POLYN178174 the MagicNumber/String  ' and target type: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.connect.data.SchemaProjector.checkMaybeCompatible@POLYN178174 the MagicNumber/String  'Schema name mismatch. source name: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.connect.data.SchemaProjector.checkMaybeCompatible@POLYN178174 the MagicNumber/String  ' and target name: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.connect.data.SchemaProjector.checkMaybeCompatible@POLYN178174 the MagicNumber/String  'Schema parameters not equal. source parameters: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.connect.data.SchemaProjector.checkMaybeCompatible@POLYN178174 the MagicNumber/String  ' and target parameters: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00110] For method projectArray arguments Schema  source|Object  record|Schema  target"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#110"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00110] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#110"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00110] The argument target is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#119"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00119] For method projectMap arguments Schema  source|Object  record|Schema  target"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#119"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00119] For method projectMap list of called methods Object monObjet|Object projectN180702|Object projectN180872"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#119"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00119] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#119"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00119] The argument target is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00123] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00124] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00125] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00126] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method projectPrimitive arguments Schema  source|Object  record|Schema  target"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#132"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00132] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#132"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00132] The argument target is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181154 the MagicNumber/String  'Not promotable type.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#166"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00166] For method isPromotable arguments Type  sourceType|Type  targetType"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.data.SchemaProjector.projectStruct@POLYN176515"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 3 starting with method org.apache.kafka.connect.data.SchemaProjector.project@POLYN174350 ending with method org.apache.kafka.connect.data.SchemaProjector.projectStruct@POLYN176515"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--org.apache.kafka.connect.data.SchemaProjector.project@POLYN174350"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175401"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--+--org.apache.kafka.connect.data.SchemaProjector.projectStruct@POLYN176515"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 3 starting with method org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180021 ending with method org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175401"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180021"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--org.apache.kafka.connect.data.SchemaProjector.project@POLYN174350"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--+--org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175401"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 3 starting with method org.apache.kafka.connect.data.SchemaProjector.project@POLYN174350 ending with method org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180021"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--org.apache.kafka.connect.data.SchemaProjector.project@POLYN174350"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175401"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--+--org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180021"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 3 starting with method org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175401 ending with method org.apache.kafka.connect.data.SchemaProjector.project@POLYN174350"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175401"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--org.apache.kafka.connect.data.SchemaProjector.projectStruct@POLYN176515"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--+--org.apache.kafka.connect.data.SchemaProjector.project@POLYN174350"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 3 starting with method org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175401 ending with method org.apache.kafka.connect.data.SchemaProjector.project@POLYN174350"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175401"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180021"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--+--org.apache.kafka.connect.data.SchemaProjector.project@POLYN174350"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 3 starting with method org.apache.kafka.connect.data.SchemaProjector.projectStruct@POLYN176515 ending with method org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175401"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--org.apache.kafka.connect.data.SchemaProjector.projectStruct@POLYN176515"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--org.apache.kafka.connect.data.SchemaProjector.project@POLYN174350"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--+--org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175401"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#80"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00080] In the recursive method org.apache.kafka.connect.data.SchemaProjector.projectStruct@POLYN176515 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00086] In the recursive method org.apache.kafka.connect.data.SchemaProjector.projectStruct@POLYN176515 the MagicNumber/String 'Error projecting ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#90"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00090] In the recursive method org.apache.kafka.connect.data.SchemaProjector.projectStruct@POLYN176515 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00093] In the recursive method org.apache.kafka.connect.data.SchemaProjector.projectStruct@POLYN176515 the MagicNumber/String 'Required field `' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00093] In the recursive method org.apache.kafka.connect.data.SchemaProjector.projectStruct@POLYN176515 the MagicNumber/String '` is missing from source schema: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#35"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00035] In the recursive method org.apache.kafka.connect.data.SchemaProjector.project@POLYN174350 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#36"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00036] In the recursive method org.apache.kafka.connect.data.SchemaProjector.project@POLYN174350 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#42"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00042] In the recursive method org.apache.kafka.connect.data.SchemaProjector.project@POLYN174350 the MagicNumber/String 'Writer schema is optional, however, target schema does not provide a default value.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#45"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00045] In the recursive method org.apache.kafka.connect.data.SchemaProjector.project@POLYN174350 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#48"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00048] In the recursive method org.apache.kafka.connect.data.SchemaProjector.project@POLYN174350 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/SchemaProjector.java.html#72"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00072] In the recursive method org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175401 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
