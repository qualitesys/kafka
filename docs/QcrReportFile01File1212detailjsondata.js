console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html" 
 , "texte" : "File connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java 28 rule violations " 
 , "fic2"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Transformation<R>"
 , "c2" : "org.apache.kafka.connect.transforms.ExtractField"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.transforms.ExtractField" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "R"
 , "c2" : "apply(R)"
 , "c3" : "4"
 , "c4" : "7"
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
   "c1" : "ConfigDef"
 , "c2" : "config()"
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
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.png" 

 , "ligneplantuml" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.svg" }

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
 , "c4" : "6"
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
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "11"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class ExtractField contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method configure arguments Map&lt;String ,? &gt;  props"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method apply arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.connect.transforms.ExtractField.apply@POLYN176728 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.connect.transforms.ExtractField.apply@POLYN176728 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.connect.transforms.ExtractField.apply@POLYN176728 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.connect.transforms.ExtractField.apply@POLYN176728 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.connect.transforms.ExtractField.apply@POLYN176728 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.connect.transforms.ExtractField.apply@POLYN176728 the MagicNumber/String  'Unknown field: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.connect.transforms.ExtractField.apply@POLYN176728 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.connect.transforms.ExtractField.apply@POLYN176728 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method newRecord arguments R  record|Schema  updatedSchema|Object  updatedValue"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#79"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00079] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method newRecord arguments R  record|Schema  updatedSchema|Object  updatedValue"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#84"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00084] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#91"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00091] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00096] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#96"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00096] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method newRecord arguments R  record|Schema  updatedSchema|Object  updatedValue"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#101"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00101] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#58"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00058] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#58"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00058] Void method close is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
