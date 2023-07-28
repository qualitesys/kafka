console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java 53 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.controller.AclControlManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.controller.AclControlManager" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00073"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#73"
 , "c1" : "AclControlManager"
 , "c2" : "AclControlManager(SnapshotRegistry;Optional&lt;ClusterMetadataAuthorizer&gt;)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#80"
 , "c1" : "ControllerResult&lt;List&lt;AclCreateResult&gt;&gt;"
 , "c2" : "createAcls(List&lt;AclBinding&gt;)"
 , "c3" : "3"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#103"
 , "c1" : "Uuid"
 , "c2" : "newAclId()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00111"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#111"
 , "c1" : "void"
 , "c2" : "validateNewAcl(AclBinding)"
 , "c3" : "9"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00146"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#146"
 , "c1" : "ControllerResult&lt;List&lt;AclDeleteResult&gt;&gt;"
 , "c2" : "deleteAcls(List&lt;AclBindingFilter&gt;)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00161"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#161"
 , "c1" : "AclDeleteResult"
 , "c2" : "deleteAclsForFilter(AclBindingFilter;Set&lt;ApiMessageAndVersion&gt;)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00177"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#177"
 , "c1" : "void"
 , "c2" : "validateFilter(AclBindingFilter)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00186"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#186"
 , "c1" : "void"
 , "c2" : "replay(AccessControlEntryRecord;Optional&lt;OffsetAndEpoch&gt;)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00198"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#198"
 , "c1" : "void"
 , "c2" : "replay(RemoveAccessControlEntryRecord;Optional&lt;OffsetAndEpoch&gt;)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00216"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#216"
 , "c1" : "Map&lt;Uuid,StandardAcl&gt;"
 , "c2" : "idToAcl()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00220"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#220"
 , "c1" : "Iterator&lt;List&lt;ApiMessageAndVersion&gt;&gt;"
 , "c2" : "iterator(long)"
 , "c3" : "1"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.svg" }

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
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "11"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "20"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.controller.AclControlManager.AclControlManager@POLYN192196 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.controller.AclControlManager.AclControlManager@POLYN192196 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method createAcls arguments List&lt;AclBinding &gt;  acls"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00080] For method createAcls list of called methods Object monObjet|org.apache.kafka.metadata.authorizer.StandardAcl StandardAcl_fromAclBindingN193646"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#80"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00080] The argument acls is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00086] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00087] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00087] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00087] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00092] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00094] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.controller.AclControlManager.createAcls@POLYN192686 the MagicNumber/String  'Unknown error while trying to create ACL' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.controller.AclControlManager.createAcls@POLYN192686 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.controller.AclControlManager.createAcls@POLYN192686 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00103] For method newAclId list of called methods Object monObjet|org.apache.kafka.common.Uuid Uuid_randomUuidN194554"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method validateNewAcl arguments AclBinding  binding"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#111"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00111] The argument binding is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.controller.AclControlManager.validateNewAcl@POLYN194707 the MagicNumber/String  'Invalid resourceType ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.controller.AclControlManager.validateNewAcl@POLYN194707 the MagicNumber/String  'Invalid patternType ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.controller.AclControlManager.validateNewAcl@POLYN194707 the MagicNumber/String  'Invalid operation ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.controller.AclControlManager.validateNewAcl@POLYN194707 the MagicNumber/String  'Invalid permissionType ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#146"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00146] For method deleteAcls arguments List&lt;AclBindingFilter &gt;  filters"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00152] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00154] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#161"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00161] For method deleteAclsForFilter arguments AclBindingFilter  filter|Set&lt;ApiMessageAndVersion &gt;  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#161"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00161] For method deleteAclsForFilter list of called methods Object monObjet|org.apache.kafka.server.authorizer.AclDeleteResult acl_toBindingN197671"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#161"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00161] The argument filter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#162"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00162] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00165] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00166] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00167] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.controller.AclControlManager.deleteAclsForFilter@POLYN197134 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method validateFilter arguments AclBindingFilter  filter"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#177"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00177] The argument filter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.controller.AclControlManager.validateFilter@POLYN198200 the MagicNumber/String  'Unknown patternFilter.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.controller.AclControlManager.validateFilter@POLYN198200 the MagicNumber/String  'Unknown entryFilter.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#186"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00186] For method replay arguments AccessControlEntryRecord  record|Optional&lt;OffsetAndEpoch &gt;  snapshotId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#186"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00186] For method replay list of called methods Object monObjet|org.apache.kafka.metadata.authorizer.StandardAclWithId StandardAclWithId_fromRecordN198734"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#187"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00187] The argument snapshotId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#198"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00198] For method replay arguments RemoveAccessControlEntryRecord  record|Optional&lt;OffsetAndEpoch &gt;  snapshotId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#198"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00198] For method replay list of called methods Object monObjet|V idToAcl_removeN199465"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#198"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00198] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#199"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00199] The argument snapshotId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.controller.AclControlManager.replay@POLYN199324 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.controller.AclControlManager.replay@POLYN199324 the MagicNumber/String  'Unable to replay ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.controller.AclControlManager.replay@POLYN199324 the MagicNumber/String  ': no acl with ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.controller.AclControlManager.replay@POLYN199324 the MagicNumber/String  'that ID found.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.controller.AclControlManager.replay@POLYN199324 the MagicNumber/String  'Unable to replay ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.controller.AclControlManager.replay@POLYN199324 the MagicNumber/String  ' for ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.controller.AclControlManager.replay@POLYN199324 the MagicNumber/String  ': acl not found ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.controller.AclControlManager.replay@POLYN199324 the MagicNumber/String  'in existingAcls.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#220"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00220] For method iterator arguments long  epoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#220"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00220] For method iterator list of called methods Object monObjet|java.util.Set&lt;java.util.Map.Entry&lt;K,V&gt;&gt; idToAcl_entrySetN200676"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
