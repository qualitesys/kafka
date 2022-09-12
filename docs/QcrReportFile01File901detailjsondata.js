console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java 25 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ImplicitLinkedHashCollection<E>"
 , "c2" : "org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00013"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#13"
 , "c1" : "ImplicitLinkedHashMultiCollection"
 , "c2" : "ImplicitLinkedHashMultiCollection()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00017"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#17"
 , "c1" : "ImplicitLinkedHashMultiCollection"
 , "c2" : "ImplicitLinkedHashMultiCollection(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00021"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#21"
 , "c1" : "ImplicitLinkedHashMultiCollection"
 , "c2" : "ImplicitLinkedHashMultiCollection(Iterator<E>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00028"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#28"
 , "c1" : "int"
 , "c2" : "addInternal(Element;Element[])"
 , "c3" : "4"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#46"
 , "c1" : "int"
 , "c2" : "findElementToRemove(Object)"
 , "c3" : "7"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#68"
 , "c1" : "List<E>"
 , "c2" : "findAll(E)"
 , "c3" : "5"
 , "c4" : "11"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.svg" }

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
 , "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00014] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.ImplicitLinkedHashMultiCollection@POLYN161648 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method addInternal arguments Element  newElement|Element[]  addElements"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#28"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00028] The argument addElements is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00031] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.addInternal@POLYN162232 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.addInternal@POLYN162232 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.addInternal@POLYN162232 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.addInternal@POLYN162232 the MagicNumber/String  'Not enough hash table slots to add a new element.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method findElementToRemove arguments Object  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00053] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findElementToRemove@POLYN163347 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findElementToRemove@POLYN163347 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findElementToRemove@POLYN163347 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findElementToRemove@POLYN163347 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findElementToRemove@POLYN163347 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method findAll arguments E  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00075] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00081] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00081] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findAll@POLYN164743 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findAll@POLYN164743 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findAll@POLYN164743 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findAll@POLYN164743 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findAll@POLYN164743 the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ImplicitLinkedHashMultiCollection.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.common.utils.ImplicitLinkedHashMultiCollection.findAll@POLYN164743 the MagicNumber/String  1 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
