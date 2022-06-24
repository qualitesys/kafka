console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html" 
 , "texte" : "File connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java 45 rule violations " 
 , "fic2"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Transformation<R>"
 , "c2" : "org.apache.kafka.connect.transforms.HeaderFrom"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.transforms.HeaderFrom" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "R"
 , "c2" : "apply(R)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "R"
 , "c2" : "applyWithSchema(R;Object;Schema)"
 , "c3" : "5"
 , "c4" : "17"
}} 
,
{ "ligne" : {
   "c1" : "Schema"
 , "c2" : "moveSchema(Schema)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "R"
 , "c2" : "applySchemaless(R;Object)"
 , "c3" : "3"
 , "c4" : "11"
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
   "c1" : "Schema"
 , "c2" : "operatingSchema(R)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "R"
 , "c2" : "newRecord(R;Schema;Object;Iterable<Header>)"
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
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.png" 

 , "ligneplantuml" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.svg" }

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
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
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
 , "c4" : "14"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00028] The class HeaderFrom contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method apply arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.connect.transforms.HeaderFrom.apply@POLYN194844 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method applyWithSchema arguments R  record|Object  operatingValue|Schema  operatingSchema"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#104"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00104] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#104"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00104] The argument operatingSchema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00120] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00121] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00122] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00123] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.connect.transforms.HeaderFrom.applyWithSchema@POLYN195380 the MagicNumber/String  'header ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.connect.transforms.HeaderFrom.applyWithSchema@POLYN195380 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.connect.transforms.HeaderFrom.applyWithSchema@POLYN195380 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.connect.transforms.HeaderFrom.applyWithSchema@POLYN195380 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#129"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00129] For method moveSchema arguments Schema  operatingSchema"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#129"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00129] The argument operatingSchema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.connect.transforms.HeaderFrom.moveSchema@POLYN197397 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00144] For method applySchemaless arguments R  record|Object  operatingValue"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#144"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00144] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00149] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00150] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00151] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.connect.transforms.HeaderFrom.applySchemaless@POLYN198343 the MagicNumber/String  'header ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.connect.transforms.HeaderFrom.applySchemaless@POLYN198343 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.connect.transforms.HeaderFrom.applySchemaless@POLYN198343 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.connect.transforms.HeaderFrom.applySchemaless@POLYN198343 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#160"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00160] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#161"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00161] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#162"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00162] For method newRecord arguments R  record|Schema  updatedSchema|Object  updatedValue|Iterable&lt;Header &gt;  updatedHeaders"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#167"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00167] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#167"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00167] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#172"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00172] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#172"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00172] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method newRecord arguments R  record|Schema  updatedSchema|Object  updatedValue|Iterable&lt;Header &gt;  updatedHeaders"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#177"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00177] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#186"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00186] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#186"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00186] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#191"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00191] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#191"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00191] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#196"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00196] For method newRecord arguments R  record|Schema  updatedSchema|Object  updatedValue|Iterable&lt;Header &gt;  updatedHeaders"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#196"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00196] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00213"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#213"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00213] For method configure arguments Map&lt;String ,? &gt;  props"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.connect.transforms.HeaderFrom.configure@POLYN202029 the MagicNumber/String  ''%s' config must have the same number of elements as '%s' config.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#208"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00208] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#208"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00208] Void method close is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
