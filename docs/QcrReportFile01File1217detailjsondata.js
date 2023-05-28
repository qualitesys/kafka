console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html" 
 , "texte" : "File connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java 44 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Transformation<R>"
 , "c2" : "org.apache.kafka.connect.transforms.HeaderFrom"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.transforms.HeaderFrom" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00108"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#108"
 , "c1" : "R"
 , "c2" : "apply(R)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00119"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#119"
 , "c1" : "R"
 , "c2" : "applyWithSchema(R;Object;Schema)"
 , "c3" : "5"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00144"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#144"
 , "c1" : "Schema"
 , "c2" : "moveSchema(Schema)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00159"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#159"
 , "c1" : "R"
 , "c2" : "applySchemaless(R;Object)"
 , "c3" : "3"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00175"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#175"
 , "c1" : "Object"
 , "c2" : "operatingValue(R)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00176"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#176"
 , "c1" : "Schema"
 , "c2" : "operatingSchema(R)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00177"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#177"
 , "c1" : "R"
 , "c2" : "newRecord(R;Schema;Object;Iterable&lt;Header&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00218"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#218"
 , "c1" : "ConfigDef"
 , "c2" : "config()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00223"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#223"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00228"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#228"
 , "c1" : "void"
 , "c2" : "configure(Map&lt;String,?&gt;)"
 , "c3" : "2"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.svg" }

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
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "11"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "14"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00108] For method apply arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.connect.transforms.HeaderFrom.apply@POLYN190552 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#119"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00119] For method applyWithSchema arguments R  record|Object  operatingValue|Schema  operatingSchema"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#119"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00119] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#119"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00119] The argument operatingSchema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00135] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00136] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00137] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00138] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.connect.transforms.HeaderFrom.applyWithSchema@POLYN191092 the MagicNumber/String  'header ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.connect.transforms.HeaderFrom.applyWithSchema@POLYN191092 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.connect.transforms.HeaderFrom.applyWithSchema@POLYN191092 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.connect.transforms.HeaderFrom.applyWithSchema@POLYN191092 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00144] For method moveSchema arguments Schema  operatingSchema"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#144"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00144] The argument operatingSchema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.connect.transforms.HeaderFrom.moveSchema@POLYN193125 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#159"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00159] For method applySchemaless arguments R  record|Object  operatingValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#159"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00159] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00164] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00165] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00166] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.connect.transforms.HeaderFrom.applySchemaless@POLYN194075 the MagicNumber/String  'header ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.connect.transforms.HeaderFrom.applySchemaless@POLYN194075 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.connect.transforms.HeaderFrom.applySchemaless@POLYN194075 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.connect.transforms.HeaderFrom.applySchemaless@POLYN194075 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#175"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00175] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#176"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00176] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method newRecord arguments R  record|Schema  updatedSchema|Object  updatedValue|Iterable&lt;Header &gt;  updatedHeaders"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#182"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00182] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#182"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00182] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#187"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00187] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#187"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00187] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#192"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00192] For method newRecord arguments R  record|Schema  updatedSchema|Object  updatedValue|Iterable&lt;Header &gt;  updatedHeaders"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#192"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00192] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#201"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00201] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#201"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00201] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#206"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00206] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#206"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00206] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#211"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00211] For method newRecord arguments R  record|Schema  updatedSchema|Object  updatedValue|Iterable&lt;Header &gt;  updatedHeaders"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#211"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00211] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00228"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#228"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00228] For method configure arguments Map&lt;String ,? &gt;  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.connect.transforms.HeaderFrom.configure@POLYN197777 the MagicNumber/String  ''%s' config must have the same number of elements as '%s' config.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#223"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00223] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.html#223"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00223] Void method close is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/HeaderFrom.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
