console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java 25 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ImplicitLinkedHashCollection<E>"
 , "c2" : ""
 , "c2" : "org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#47"
 , "c1" : "ImplicitLinkedHashMultiCollection"
 , "c2" : "ImplicitLinkedHashMultiCollection()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#51"
 , "c1" : "ImplicitLinkedHashMultiCollection"
 , "c2" : "ImplicitLinkedHashMultiCollection(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#55"
 , "c1" : "ImplicitLinkedHashMultiCollection"
 , "c2" : "ImplicitLinkedHashMultiCollection(Iterator&lt;E&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#69"
 , "c1" : "int"
 , "c2" : "addInternal(Element;Element[])"
 , "c3" : "4"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00093"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#93"
 , "c1" : "int"
 , "c2" : "findElementToRemove(Object)"
 , "c3" : "7"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00122"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#122"
 , "c1" : "List&lt;E&gt;"
 , "c2" : "findAll(E)"
 , "c3" : "5"
 , "c4" : "11"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "16"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.ImplicitLinkedHashMultiCollection@POLYN164246 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method addInternal arguments Element  newElement|Element[]  addElements"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#69"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00069] The argument addElements is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00072] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.addInternal@POLYN164830 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.addInternal@POLYN164830 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.addInternal@POLYN164830 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.addInternal@POLYN164830 the MagicNumber/String  'Not enough hash table slots to add a new element.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method findElementToRemove arguments Object  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00100] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findElementToRemove@POLYN165949 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findElementToRemove@POLYN165949 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findElementToRemove@POLYN165949 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findElementToRemove@POLYN165949 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findElementToRemove@POLYN165949 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00122] For method findAll arguments E  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00129] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00135] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00135] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findAll@POLYN167351 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findAll@POLYN167351 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findAll@POLYN167351 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findAll@POLYN167351 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findAll@POLYN167351 the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findAll@POLYN167351 the MagicNumber/String  1 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
