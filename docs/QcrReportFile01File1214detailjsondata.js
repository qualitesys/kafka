console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html" 
 , "texte" : "File connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java 27 rule violations " 
 , "fic2"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Transformation<R>"
 , "c2" : "org.apache.kafka.connect.transforms.ExtractField"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.transforms.ExtractField" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#49"
 , "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#55"
 , "c1" : "R"
 , "c2" : "apply(R)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00073"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#73"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00077"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#77"
 , "c1" : "ConfigDef"
 , "c2" : "config()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#81"
 , "c1" : "Schema"
 , "c2" : "operatingSchema(R)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#83"
 , "c1" : "Object"
 , "c2" : "operatingValue(R)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00085"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#85"
 , "c1" : "R"
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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "11"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method configure arguments Map&lt;String ,? &gt;  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method apply arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.connect.transforms.ExtractField.apply@POLYN159634 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.connect.transforms.ExtractField.apply@POLYN159634 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.connect.transforms.ExtractField.apply@POLYN159634 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.connect.transforms.ExtractField.apply@POLYN159634 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.connect.transforms.ExtractField.apply@POLYN159634 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.connect.transforms.ExtractField.apply@POLYN159634 the MagicNumber/String  'Unknown field: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.connect.transforms.ExtractField.apply@POLYN159634 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.connect.transforms.ExtractField.apply@POLYN159634 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method newRecord arguments R  record|Schema  updatedSchema|Object  updatedValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#89"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00089] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#94"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00094] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#99"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00099] For method newRecord arguments R  record|Schema  updatedSchema|Object  updatedValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#99"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00099] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00106] For method operatingSchema arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#106"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00106] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method operatingValue arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#111"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00111] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method newRecord arguments R  record|Schema  updatedSchema|Object  updatedValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#116"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00116] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#73"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00073] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.html#73"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00073] Void method close is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ExtractField.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
