console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TransformationChain.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TransformationChain.java 13 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TransformationChain.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AutoCloseable"
 , "c2" : "org.apache.kafka.connect.runtime.TransformationChain"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.TransformationChain" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TransformationChain"
 , "c2" : "TransformationChain(List<Transformation<R>>;RetryWithToleranceOperator)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "R"
 , "c2" : "apply(R)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TransformationChain.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TransformationChain.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
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
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TransformationChain.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class TransformationChain contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TransformationChain.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method apply arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TransformationChain.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00030] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TransformationChain.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.connect.runtime.TransformationChain.apply@POLYN167459 the MagicNumber/String  'Applying transformation {} to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TransformationChain.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.connect.runtime.TransformationChain.apply@POLYN167459 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TransformationChain.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TransformationChain.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00053] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TransformationChain.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.connect.runtime.TransformationChain.equals@POLYN168496 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TransformationChain.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.connect.runtime.TransformationChain.equals@POLYN168496 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TransformationChain.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.connect.runtime.TransformationChain.equals@POLYN168496 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TransformationChain.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.connect.runtime.TransformationChain.toString@POLYN169174 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TransformationChain.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.connect.runtime.TransformationChain.toString@POLYN169174 the MagicNumber/String  '{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TransformationChain.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.connect.runtime.TransformationChain.toString@POLYN169174 the MagicNumber/String  '}' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
