console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html" 
 , "texte" : "File connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java 55 rule violations " 
 , "fic2"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Transformation<R>"
 , "c2" : "org.apache.kafka.connect.transforms.TimestampConverter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.transforms.TimestampConverter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "3"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "R"
 , "c2" : "apply(R)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "ConfigDef"
 , "c2" : "config()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Schema"
 , "c2" : "operatingSchema(R)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Object"
 , "c2" : "operatingValue(R)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "R"
 , "c2" : "newRecord(R;Schema;Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "R"
 , "c2" : "applyWithSchema(R)"
 , "c3" : "9"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Struct"
 , "c2" : "applyValueWithSchema(Struct;Schema)"
 , "c3" : "5"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "R"
 , "c2" : "applySchemaless(R)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "String"
 , "c2" : "timestampTypeFromSchema(Schema)"
 , "c3" : "10"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "String"
 , "c2" : "inferTimestampType(Object)"
 , "c3" : "6"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Object"
 , "c2" : "convertTimestamp(Object;String)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Object"
 , "c2" : "convertTimestamp(Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.png" 

 , "ligneplantuml" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "24"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "18"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00035] The class TimestampConverter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00248] The class Config contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#265"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00265] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.connect.transforms.TimestampConverter.configure@POLYN232990 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.connect.transforms.TimestampConverter.configure@POLYN232990 the MagicNumber/String  'TimestampConverter requires format option to be specified when using string timestamps' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.connect.transforms.TimestampConverter.configure@POLYN232990 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00282"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00282] In method org.apache.kafka.connect.transforms.TimestampConverter.configure@POLYN232990 the MagicNumber/String  'TimestampConverter requires a SimpleDateFormat-compatible pattern for string timestamps: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00290"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#290"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00290] For method apply arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.connect.transforms.TimestampConverter.apply@POLYN234657 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00309"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#309"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00309] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00309"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#309"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00309] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00314"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#314"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00314] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00314"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#314"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00314] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00319"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#319"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00319] For method newRecord arguments R  record|Schema  updatedSchema|Object  updatedValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00319"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#319"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00319] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00326"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#326"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00326] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00326"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#326"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00326] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#331"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00331] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#331"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00331] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00336"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#336"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00336] For method newRecord arguments R  record|Schema  updatedSchema|Object  updatedValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00336"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#336"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00336] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#341"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00341] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00343"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#343"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00343] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00345"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#345"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00345] For method newRecord arguments R  record|Schema  updatedSchema|Object  updatedValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00347"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#347"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00347] For method applyWithSchema arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00357"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.connect.transforms.TimestampConverter.applyWithSchema@POLYN237104 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00368"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00368] In method org.apache.kafka.connect.transforms.TimestampConverter.applyWithSchema@POLYN237104 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00382"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#382"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00382] For method applyValueWithSchema arguments Struct  value|Schema  updatedSchema"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00388"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00388] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00383"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00383] In method org.apache.kafka.connect.transforms.TimestampConverter.applyValueWithSchema@POLYN239668 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method org.apache.kafka.connect.transforms.TimestampConverter.applyValueWithSchema@POLYN239668 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00399"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#399"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00399] For method applySchemaless arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00401"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#401"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00401] In method org.apache.kafka.connect.transforms.TimestampConverter.applySchemaless@POLYN240697 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00402"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00402] In method org.apache.kafka.connect.transforms.TimestampConverter.applySchemaless@POLYN240697 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00407] In method org.apache.kafka.connect.transforms.TimestampConverter.applySchemaless@POLYN240697 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00412"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#412"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00412] For method timestampTypeFromSchema arguments Schema  schema"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00412"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#412"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00412] The argument schema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00426"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#426"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00426] In method org.apache.kafka.connect.transforms.TimestampConverter.timestampTypeFromSchema@POLYN241784 the MagicNumber/String  'Schema ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00426"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#426"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00426] In method org.apache.kafka.connect.transforms.TimestampConverter.timestampTypeFromSchema@POLYN241784 the MagicNumber/String  ' does not correspond to a known timestamp type format' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00430"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#430"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00430] For method inferTimestampType arguments Object  timestamp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00430"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#430"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00430] The argument timestamp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00440"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00440] In method org.apache.kafka.connect.transforms.TimestampConverter.inferTimestampType@POLYN242844 the MagicNumber/String  'TimestampConverter does not support ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00440"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00440] In method org.apache.kafka.connect.transforms.TimestampConverter.inferTimestampType@POLYN242844 the MagicNumber/String  ' objects as timestamps' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00444"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#444"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00444] For method convertTimestamp arguments Object  timestamp|String  timestampFormat"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00445"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#445"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00445] In method org.apache.kafka.connect.transforms.TimestampConverter.convertTimestamp@POLYN243519 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00446"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#446"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00446] In method org.apache.kafka.connect.transforms.TimestampConverter.convertTimestamp@POLYN243519 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00448"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#448"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00448] In method org.apache.kafka.connect.transforms.TimestampConverter.convertTimestamp@POLYN243519 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00453"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#453"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00453] In method org.apache.kafka.connect.transforms.TimestampConverter.convertTimestamp@POLYN243519 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00454"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#454"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00454] In method org.apache.kafka.connect.transforms.TimestampConverter.convertTimestamp@POLYN243519 the MagicNumber/String  'Unsupported timestamp type: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00459"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#459"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00459] In method org.apache.kafka.connect.transforms.TimestampConverter.convertTimestamp@POLYN243519 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00460"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#460"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00460] In method org.apache.kafka.connect.transforms.TimestampConverter.convertTimestamp@POLYN243519 the MagicNumber/String  'Unsupported timestamp type: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00465"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#465"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00465] For method convertTimestamp arguments Object  timestamp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00466"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#466"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00466] In method org.apache.kafka.connect.transforms.TimestampConverter.convertTimestamp@POLYN244647 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00304"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#304"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00304] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00304"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampConverter.java.html#304"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00304] Void method close is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
