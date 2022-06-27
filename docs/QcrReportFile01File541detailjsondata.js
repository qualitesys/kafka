console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java 19 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.protocol.types.Type"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.protocol.types.Type" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "write(ByteBuffer;Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Object"
 , "c2" : "read(ByteBuffer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Object"
 , "c2" : "validate(Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "sizeOf(Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isNullable()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Optional<Type>"
 , "c2" : "arrayElementType()"
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
   "c1" : "String"
 , "c2" : "toHtml()"
 , "c3" : "2"
 , "c4" : "17"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.svg" }

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
 , "c4" : "13"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class Type contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.html#17"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00017] For method write arguments ByteBuffer  buffer|Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.html#20"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00020] For method read arguments ByteBuffer  buffer"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method validate arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method sizeOf arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.common.protocol.types.Type.isNullable@POLYN288374 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.html#1055"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01055] In method org.apache.kafka.common.protocol.types.Type.toHtml@POLYN328286 the MagicNumber/String  '&amp;lt;table class=\'data-table\'&amp;gt;&amp;lt;tbody&amp;gt;\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.html#1056"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01056] In method org.apache.kafka.common.protocol.types.Type.toHtml@POLYN328286 the MagicNumber/String  '&amp;lt;tr&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.html#1057"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01057] In method org.apache.kafka.common.protocol.types.Type.toHtml@POLYN328286 the MagicNumber/String  '&amp;lt;th&amp;gt;Type&amp;lt;/th&amp;gt;\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.html#1058"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01058] In method org.apache.kafka.common.protocol.types.Type.toHtml@POLYN328286 the MagicNumber/String  '&amp;lt;th&amp;gt;Description&amp;lt;/th&amp;gt;\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.html#1059"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01059] In method org.apache.kafka.common.protocol.types.Type.toHtml@POLYN328286 the MagicNumber/String  '&amp;lt;/tr&amp;gt;\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.html#1061"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01061] In method org.apache.kafka.common.protocol.types.Type.toHtml@POLYN328286 the MagicNumber/String  '&amp;lt;tr&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.html#1062"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01062] In method org.apache.kafka.common.protocol.types.Type.toHtml@POLYN328286 the MagicNumber/String  '&amp;lt;td&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.html#1064"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01064] In method org.apache.kafka.common.protocol.types.Type.toHtml@POLYN328286 the MagicNumber/String  '&amp;lt;/td&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.html#1065"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01065] In method org.apache.kafka.common.protocol.types.Type.toHtml@POLYN328286 the MagicNumber/String  '&amp;lt;td&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.html#1067"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01067] In method org.apache.kafka.common.protocol.types.Type.toHtml@POLYN328286 the MagicNumber/String  '&amp;lt;/td&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.html#1068"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01068] In method org.apache.kafka.common.protocol.types.Type.toHtml@POLYN328286 the MagicNumber/String  '&amp;lt;/tr&amp;gt;\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.html#1070"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01070] In method org.apache.kafka.common.protocol.types.Type.toHtml@POLYN328286 the MagicNumber/String  '&amp;lt;/tbody&amp;gt;&amp;lt;/table&amp;gt;\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/types/Type.java.html#1074"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01074] For method main arguments String[]  args"
}} 
]
};
console.log('leListeStr 99 main end');
