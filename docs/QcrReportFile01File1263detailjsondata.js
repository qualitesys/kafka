console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html" 
 , "texte" : "File generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java 126 rule violations " 
 , "fic2"  : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.message.SchemaGenerator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.message.SchemaGenerator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#38"
 , "c1" : "SchemaGenerator"
 , "c2" : "SchemaGenerator(HeaderGenerator;StructRegistry)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#44"
 , "c1" : "void"
 , "c2" : "generateSchemas(MessageSpec)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#59"
 , "c1" : "void"
 , "c2" : "generateSchemas(String;StructSpec;Versions)"
 , "c3" : "8"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00090"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#90"
 , "c1" : "void"
 , "c2" : "generateSchemaForVersion(StructSpec;short;CodeBuffer)"
 , "c3" : "8"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00136"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#136"
 , "c1" : "void"
 , "c2" : "generateTaggedFieldsSchemaForVersion(StructSpec;short;CodeBuffer)"
 , "c3" : "6"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00176"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#176"
 , "c1" : "String"
 , "c2" : "fieldTypeToSchemaType(FieldSpec;short;Versions)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00186"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#186"
 , "c1" : "String"
 , "c2" : "fieldTypeToSchemaType(FieldType;boolean;short;Versions;boolean)"
 , "c3" : "47"
 , "c4" : "47"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00293"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#293"
 , "c1" : "short"
 , "c2" : "floorVersion(String;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00299"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#299"
 , "c1" : "void"
 , "c2" : "writeSchema(String;CodeBuffer)"
 , "c3" : "6"
 , "c4" : "25"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.png" 

 , "ligneplantuml" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "11"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "11"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "89"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method generateSchemas arguments MessageSpec  message"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00044] For method generateSchemas list of called methods Object monObjet|org.apache.kafka.message.Versions message_flexibleVersionsN203533"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#44"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00044] The argument message is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00050] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method generateSchemas arguments String  className|StructSpec  struct|Versions  parentVersions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00059] For method generateSchemas list of called methods Object monObjet|org.apache.kafka.message.Versions parentVersions_intersectN204348"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#59"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00059] The argument struct is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#60"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00060] The argument parentVersions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00071] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00071] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00079] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.message.SchemaGenerator.generateSchemas@POLYN204193 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.message.SchemaGenerator.generateSchemas@POLYN204193 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method generateSchemaForVersion arguments StructSpec  struct|short  version|CodeBuffer  buffer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00090] For method generateSchemaForVersion list of called methods Object monObjet|java.util.List&lt;org.apache.kafka.message.FieldSpec&gt; struct_fieldsN206411|java.util.List&lt;org.apache.kafka.message.FieldSpec&gt; struct_fieldsN206671|java.util.List&lt;org.apache.kafka.message.FieldSpec&gt; struct_fieldsN207610"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#90"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00090] The argument struct is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#92"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00092] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00099] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00115] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00120] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.message.SchemaGenerator.generateSchemaForVersion@POLYN206256 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.message.SchemaGenerator.generateSchemaForVersion@POLYN206256 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.message.SchemaGenerator.generateSchemaForVersion@POLYN206256 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.message.SchemaGenerator.generateSchemaForVersion@POLYN206256 the MagicNumber/String  'new Schema(%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.message.SchemaGenerator.generateSchemaForVersion@POLYN206256 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.message.SchemaGenerator.generateSchemaForVersion@POLYN206256 the MagicNumber/String  'new Field(\'%s\', %s, \'%s\')%s%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.message.SchemaGenerator.generateSchemaForVersion@POLYN206256 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.message.SchemaGenerator.generateSchemaForVersion@POLYN206256 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.message.SchemaGenerator.generateSchemaForVersion@POLYN206256 the MagicNumber/String  ');%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method generateTaggedFieldsSchemaForVersion arguments StructSpec  struct|short  version|CodeBuffer  buffer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00136] For method generateTaggedFieldsSchemaForVersion list of called methods Object monObjet|java.util.List&lt;org.apache.kafka.message.FieldSpec&gt; struct_fieldsN209108|java.util.List&lt;org.apache.kafka.message.FieldSpec&gt; struct_fieldsN209368|java.util.List&lt;org.apache.kafka.message.FieldSpec&gt; struct_fieldsN210036"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#136"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00136] The argument struct is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#137"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00137] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00146] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00157] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00163] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.message.SchemaGenerator.generateTaggedFieldsSchemaForVersion@POLYN208874 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.message.SchemaGenerator.generateTaggedFieldsSchemaForVersion@POLYN208874 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.message.SchemaGenerator.generateTaggedFieldsSchemaForVersion@POLYN208874 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.message.SchemaGenerator.generateTaggedFieldsSchemaForVersion@POLYN208874 the MagicNumber/String  'TaggedFieldsSection.of(%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.message.SchemaGenerator.generateTaggedFieldsSchemaForVersion@POLYN208874 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.message.SchemaGenerator.generateTaggedFieldsSchemaForVersion@POLYN208874 the MagicNumber/String  '%d, new Field(\'%s\', %s, \'%s\')%s%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.message.SchemaGenerator.generateTaggedFieldsSchemaForVersion@POLYN208874 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.message.SchemaGenerator.generateTaggedFieldsSchemaForVersion@POLYN208874 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.message.SchemaGenerator.generateTaggedFieldsSchemaForVersion@POLYN208874 the MagicNumber/String  ')%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#176"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00176] For method fieldTypeToSchemaType arguments FieldSpec  field|short  version|Versions  fieldFlexibleVersions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#176"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00176] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#186"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00186] For method fieldTypeToSchemaType arguments FieldType  type|boolean  nullable|short  version|Versions  fieldFlexibleVersions|boolean  zeroCopy"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#186"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00186] The argument type is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#189"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00189] The argument fieldFlexibleVersions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  ' cannot be nullable.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type.BOOLEAN' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  ' cannot be nullable.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type.INT8' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  ' cannot be nullable.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type.INT16' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  ' cannot be nullable.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type.UINT16' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  ' cannot be nullable.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type.UNSIGNED_INT32' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  ' cannot be nullable.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00226"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type.INT32' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  ' cannot be nullable.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type.INT64' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  ' cannot be nullable.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type.UUID' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00242] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00242] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  ' cannot be nullable.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00244"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type.FLOAT64' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type.COMPACT_NULLABLE_STRING' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type.COMPACT_STRING' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type.NULLABLE_STRING' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type.STRING' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type.COMPACT_NULLABLE_BYTES' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type.COMPACT_BYTES' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type.NULLABLE_BYTES' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type.BYTES' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type.COMPACT_RECORDS' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00264"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type.RECORDS' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00270"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'CompactArrayOf.nullable' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00270"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'new CompactArrayOf' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  '%s(%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00272"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00272"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00277"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'ArrayOf.nullable' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00277"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'new ArrayOf' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  '%s(%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00283"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00283"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  ' cannot be nullable.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  '%s.SCHEMA_%d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.message.SchemaGenerator.fieldTypeToSchemaType@POLYN211579 the MagicNumber/String  'Unsupported type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#293"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00293] For method floorVersion arguments String  className|short  v"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#299"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00299] For method writeSchema arguments String  className|CodeBuffer  buffer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#299"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00299] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00304"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00304] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00305"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.message.SchemaGenerator.writeSchema@POLYN218881 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.message.SchemaGenerator.writeSchema@POLYN218881 the MagicNumber/String  'public static final Schema SCHEMA_%d = SCHEMA_%d;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.message.SchemaGenerator.writeSchema@POLYN218881 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00308"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00308] In method org.apache.kafka.message.SchemaGenerator.writeSchema@POLYN218881 the MagicNumber/String  'public static final Schema SCHEMA_%d =%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00313"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.message.SchemaGenerator.writeSchema@POLYN218881 the MagicNumber/String  '%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00315"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.message.SchemaGenerator.writeSchema@POLYN218881 the MagicNumber/String  'public static final Schema[] SCHEMAS = new Schema[] {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.message.SchemaGenerator.writeSchema@POLYN218881 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.message.SchemaGenerator.writeSchema@POLYN218881 the MagicNumber/String  'null%s%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.message.SchemaGenerator.writeSchema@POLYN218881 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.message.SchemaGenerator.writeSchema@POLYN218881 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00321"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.message.SchemaGenerator.writeSchema@POLYN218881 the MagicNumber/String  'SCHEMA_%d%s%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00321"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.message.SchemaGenerator.writeSchema@POLYN218881 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00321"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.message.SchemaGenerator.writeSchema@POLYN218881 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.message.SchemaGenerator.writeSchema@POLYN218881 the MagicNumber/String  '};%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00325"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.message.SchemaGenerator.writeSchema@POLYN218881 the MagicNumber/String  '%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00327"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.message.SchemaGenerator.writeSchema@POLYN218881 the MagicNumber/String  'public static final short LOWEST_SUPPORTED_VERSION = %d;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00328"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#328"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00328] In method org.apache.kafka.message.SchemaGenerator.writeSchema@POLYN218881 the MagicNumber/String  'public static final short HIGHEST_SUPPORTED_VERSION = %d;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00329"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00329] In method org.apache.kafka.message.SchemaGenerator.writeSchema@POLYN218881 the MagicNumber/String  '%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.message.SchemaGenerator.generateSchemas@POLYN204193"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#63"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00063] In the recursive method org.apache.kafka.message.SchemaGenerator.generateSchemas@POLYN204193 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.html#77"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00077] In the recursive method org.apache.kafka.message.SchemaGenerator.generateSchemas@POLYN204193 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/generator/src/main/java/org/apache/kafka/message/SchemaGenerator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
