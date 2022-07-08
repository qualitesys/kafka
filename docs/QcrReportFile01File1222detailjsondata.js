console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html" 
 , "texte" : "File connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java 34 rule violations " 
 , "fic2"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Transformation<R>"
 , "c2" : "org.apache.kafka.connect.transforms.SetSchemaMetadata"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.transforms.SetSchemaMetadata" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "R"
 , "c2" : "apply(R)"
 , "c3" : "2"
 , "c4" : "9"
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
 , "c2" : "newRecord(R;Schema)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Object"
 , "c2" : "updateSchemaIn(Object;Schema)"
 , "c3" : "3"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.png" 

 , "ligneplantuml" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.svg" }

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
 , "c4" : "7"
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
 , "c4" : "11"
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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00019] The class SetSchemaMetadata contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.connect.transforms.SetSchemaMetadata.configure@POLYN169078 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.connect.transforms.SetSchemaMetadata.configure@POLYN169078 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.connect.transforms.SetSchemaMetadata.configure@POLYN169078 the MagicNumber/String  'Neither schema name nor version configured' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method apply arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00050] For method apply list of called methods Object monObjet|java.util.List&lt;org.apache.kafka.connect.source.SourceRecord&gt; schema_typeN170355"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.connect.transforms.SetSchemaMetadata.apply@POLYN169711 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.connect.transforms.SetSchemaMetadata.apply@POLYN169711 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.connect.transforms.SetSchemaMetadata.apply@POLYN169711 the MagicNumber/String  'updating schema metadata' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.connect.transforms.SetSchemaMetadata.apply@POLYN169711 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.connect.transforms.SetSchemaMetadata.apply@POLYN169711 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.connect.transforms.SetSchemaMetadata.apply@POLYN169711 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.connect.transforms.SetSchemaMetadata.apply@POLYN169711 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.connect.transforms.SetSchemaMetadata.apply@POLYN169711 the MagicNumber/String  'Applying SetSchemaMetadata SMT. Original schema: {}, updated schema: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#87"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00087] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method newRecord arguments R  record|Schema  updatedSchema"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#94"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00094] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#99"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00099] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#99"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00099] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method newRecord arguments R  record|Schema  updatedSchema"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#104"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00104] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00113] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#113"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00113] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00118] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#118"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00118] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#123"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00123] For method newRecord arguments R  record|Schema  updatedSchema"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#123"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00123] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00130] For method updateSchemaIn arguments Object  keyOrValue|Schema  updatedSchema"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#130"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00130] The argument updatedSchema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00082] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/SetSchemaMetadata.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00082] Void method close is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
